
import React, { useState } from "react";
import Yellow1 from "../assets/Vector/Yellow1.png";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import Cat2 from "../assets/Pets/Only Pets/Cat2.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitMsg = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://petcare-api.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }),
      });

      if (response.ok) {
        setEmail("");
        setName("");
        setMessage("");

        toast.success("Message sent successfully");
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      toast.error("Sending message error");
    }
  };

  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text ls-wide"
            data-aos="fade-up"
            data-aos-duration="550"
          >
            Contact to{" "}
            <img
              src={petCareLogo}
              width="190"
              className="logo"
              style={{
                width: "13rem",
                marginTop: "0.5rem",
                marginLeft: "0.3rem",
              }}
              alt="petCareLogo"
            />
          </h1>

          {/* Row 1 */}
          <img
            src={Yellow1}
            alt="Yellow1"
            className="Yellow1"
            style={{ marginTop: "-8rem" }}
          />
          <div className="row mt-lg-3 d-flex align-items-start justify-content-center">
            <div className="col-lg-6 col-md-12 mt-3 form-main-card d-flex justify-content-center align-items-center">
              <form
                style={{ width: "100%" }}
                method="POST"
                onSubmit={submitMsg}
              >
                <h1
                  className="form-title"
                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Drop your message here
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Your Name
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          name="name"
                          required
                          value={name}
                          style={{ maxWidth: "100%" }}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
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
                        </span>{" "}
                        &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          name="email"
                          required
                          value={email}
                          style={{ maxWidth: "100%" }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-3 d-flex align-items-center justify-content-center row-divider">
                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-form-label"
                        style={{ position: "relative", cursor: "pointer" }}
                      >
                        Your Message
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
                        &nbsp; &nbsp; &nbsp;
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          id="message"
                          className="form-control"
                          name="message"
                          required
                          value={message}
                          style={{ maxWidth: "100%" }}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
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
              className="col-lg-5 col-md-12 d-flex flex-row-reverse px-5 mt-3 Graphics-1"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img
                src={Cat2}
                alt="Cat2"
                width={500}
                height={575}
                className="Dog1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
