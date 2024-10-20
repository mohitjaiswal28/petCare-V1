
import React, { useState, useEffect } from "react";
import Yellow4 from "../assets/Vector/Yellow4.png";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import Dog4 from "../assets/Pets/Only Pets/Dog4.jpg";
import Cat3 from "../assets/Pets/Only Pets/Cat3.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/ContextAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookYourApp() {
  const [booking, setBooking] = useState({
    fname: "",
    lname: "",
    email: "",
    phno: "",
    date: "",
    petname: "",
    petage: "",
    petweight: "",
    typeofpet: "",
    anymessage: "",
  });

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth("");

  let name, value;
  const { storeToken } = useAuth("");

  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;

    setBooking({ ...booking, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://petcare-api.onrender.com/bookyourapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      if (res.ok) {
        setBooking({
          fname: "",
          lname: "",
          email: "",
          phno: "",
          date: "",
          petname: "",
          petage: "",
          petweight: "",
          typeofpet: "",
          anymessage: "",
        });

        const res_data = await res.json();
        storeToken(res_data.token);

        toast.success("Appointment form submitted");
        navigate("/myprofile");
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      toast.error("Appointment booking error");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {

      navigate("/login"); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text ls-wide"
            data-aos="fade-up"
            data-aos-duration="550"
          >
            Book your appointment on{" "}
            <img
              src={petCareLogo}
              width="190"
              className="logo"
              style={{
                width: "13rem",
                marginTop: "0.5rem",
                marginLeft: "0.5rem",
              }}
              alt="petCareLogo"
            />
          </h1>

          {/* Row 1 */}
          <img src={Yellow4} alt="Yellow4" className="Yellow4" />
          <div className="row mt-lg-3 d-flex align-items-start justify-content-center">
            {/* User register from */}
            <div className="col-lg-7 col-md-12 mt-3 form-main-card Graphics-3">
              <form style={{ width: "100%" }} onSubmit={PostData} method="POST">
                <h1
                  className="form-title"
                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Owner Details
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="fname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        First Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                          name="fname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.fname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="lname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Last Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="lname"
                          className="form-control"
                          name="lname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.lname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 inside form */}
                <div className="row mt-lg-6 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        E-Mail Address
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.email}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="phno"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Phone Number
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="phno"
                          className="form-control"
                          name="phno"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={booking.phno}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h1
                  className="form-title"
                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                    marginTop: "3rem",
                  }}
                >
                  Pet Details
                </h1>

                {/* Row 4 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="date"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Visit Date
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="date"
                          id="date"
                          className="form-control"
                          name="date"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.date}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="petname"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Your Pet Name
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>{" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="petname"
                          className="form-control"
                          name="petname"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.petname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 5 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="petage"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Pet Age
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="petage"
                          className="form-control"
                          name="petage"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={booking.petage}
                          onChange={handleInputs}
                          placeholder="in Years"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="typeofpet"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Type of Pet
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="typeofpet"
                          className="form-control"
                          name="typeofpet"
                          required
                          style={{ maxWidth: "100%" }}
                          value={booking.typeofpet}
                          onChange={handleInputs}
                          placeholder="Dog, Cat, etc"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 6 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="petweight"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Pet Weight
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="petweight"
                          className="form-control"
                          name="petweight"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={booking.petweight}
                          onChange={handleInputs}
                          placeholder="in Kgs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="anymessage"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Any Message
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            position: "absolute",
                            top: "5px",
                          }}
                        >
                          *
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div
                        className="col-lg-12"
                        style={{ position: "relative" }}
                      >
                        <input
                          type="text"
                          id="anymessage"
                          className="form-control"
                          name="anymessage"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={booking.anymessage}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    marginTop: "3rem",
                    lineHeight: "25px",
                    fontSize: "1.1rem",
                    color: "#d4ac32",
                  }}
                >
                  In order to process your school registration, we ask to
                  provide the following information. Please note that all the
                  fields marked with an asterisk(*) are required.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="second-btn" type="reset">
                      Reset <ClearIcon />{" "}
                    </button>
                  </div>

                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button className="main-btn" type="submit">
                      Submit <DoneIcon />{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="col-lg-5 col-md-12 d-flex flex-column justify-content-center align-items-center mt-3 Graphics-1"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img
                src={Dog4}
                alt="Dog4"
                width={500}
                className="Dog1"
                height={720}
              />

              <img
                src={Cat3}
                alt="Cat3"
                width={500}
                className="Dog1 mt-2 Dog3"
                height={340}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
