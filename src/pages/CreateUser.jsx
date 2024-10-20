
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Yellow4 from "../assets/Vector/Yellow4.png";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import Cat1 from "../assets/Pets/Only Pets/Cat1.jpg";
import Dog3 from "../assets/Pets/Only Pets/Dog3.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/ContextAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    phno: "",
    petname: "",
    petage: "",
    petweight: "",
    typeofpet: "",
    password: "",
  });

  let name, value;
  const { isLoggedIn } = useAuth("");
  const navigate = useNavigate();
  const { storeToken } = useAuth("");

  function handleInputs(e) {
    name = e.target.name;
    value = e.target.value;

    if (name === "password") {
      setPassword(value);
    }

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://petcare-api.onrender.com/userregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await res.json();

      if (res.ok) {
        setUser({
          name: "",
          email: "",
          gender: "",
          phno: "",
          petname: "",
          petage: "",
          petweight: "",
          typeofpet: "",
          password: "",
        });

        storeToken(res_data.token);

        toast.success("Success");
        navigate("/login");
      } else {
        if (res_data.msg) {
          const errorMessage = res_data.msg[0].message;
          toast.error(errorMessage);
        } else {
          toast.error("Failed");
        }
      }
    } catch (error) {
    }
  };

  useEffect(() => {

    if (isLoggedIn) {
      navigate("/"); 
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
            Create your account on{" "}
            <img
              src={petCareLogo}
              width="190"
              className="logo"
              style={{
                width: "13rem",
                marginTop: "0.5rem",
                marginLeft: "0.5rem",
              }}
              alt="petcare"
            />
          </h1>

          {/* Row 1 */}
          <img src={Yellow4} alt="Yellow4" className="Yellow4"/>
          <div className="row mt-lg-3 d-flex align-items-start justify-content-center">
            <div
              className="col-lg-5 col-md-12 d-flex flex-column justify-content-center align-items-center mt-3 Graphics-1"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src={Cat1}
                alt="Cat1"
                width={500}
                className="Dog1"
                height={780}
              />

              <img
                src={Dog3}
                alt="Dog3"
                width={500}
                className="Dog1 mt-2 Dog3"
                height={360}
              />
            </div>

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
                  Personal Details
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-6 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Name
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
                          id="name"
                          className="form-control"
                          name="name"
                          required
                          style={{ maxWidth: "100%" }}
                          value={user.name}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

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
                          value={user.email}
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
                          value={user.phno}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-4 mt-3 d-flex align-items-center justify-content-center">
                    <div className="form-group row">
                      <label
                        htmlFor="gender"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Gender
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12 dropdown-main select-wrapper">
                        <select
                          id="gender"
                          className="form-control dropdown"
                          name="gender"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={user.gender}
                          onChange={handleInputs}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="Prefer not to answer">
                            Perfer not to Answer
                          </option>
                        </select>
                        <div className="arrow-down"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3 inside form */}
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
                          value={user.petname}
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                  </div>
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
                          value={user.petage}
                          onChange={handleInputs}
                          placeholder="in Years"
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
                          value={user.typeofpet}
                          onChange={handleInputs}
                          placeholder="Dog, Cat, etc"
                        />
                      </div>
                    </div>
                  </div>

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
                          value={user.petweight}
                          onChange={handleInputs}
                          placeholder="in Kgs"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 6 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="password"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Enter Password
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
                      </label>
                      <div
                        className="col-lg-12"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          className="form-control"
                          name="password"
                          required
                          style={{ maxWidth: "100%", height: "50px" }}
                          value={password}
                          onChange={handleInputs}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon
                              style={{ color: "#054169", marginRight: "10px" }}
                            />
                          ) : (
                            <VisibilityIcon
                              style={{ color: "#054169", marginRight: "10px" }}
                            />
                          )}
                        </button>
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

                <p
                  style={{
                    marginTop: "0.8rem",
                    lineHeight: "25px",
                    fontSize: "1.1rem",
                    color: "#f1f1f1",
                  }}
                >
                  If you already have account on petCare, then{" "}
                  <b
                    style={{
                      color: "#d4ac32",
                      textDecoration: "underline",
                      textUnderlineOffset: "0.3rem",
                      fontSize: "1.2rem",
                    }}
                  >
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      login here
                    </Link>
                  </b>
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
          </div>
        </div>
      </div>
    </section>
  );
}
