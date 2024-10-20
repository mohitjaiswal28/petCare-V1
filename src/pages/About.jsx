import React from "react";
import Yellow4 from "../assets/Vector/Yellow4.png";
import Owner1 from "../assets/Pets/With Owner/Owner1.jpg";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function About() {
  return (
    <section id="about">
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text au-text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            About Us
          </h1>

          <img src={Yellow4} alt="Yellow Background" className="Yellow4" />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 mt-1">
              <div className="container" style={{ maxWidth: "1000px" }}>
                <h3
                  className="para-1 d-flex justify-content-center align-items-center text-center"
                  style={{ marginTop: "0rem" }}
                  data-aos="fade-up"
                  data-aos-duration="950"
                  data-aos-delay="200"
                >
                  At petCare, we're all about happy tails and healthy paws. Our
                  dedicated team of experts is committed to giving your pets the
                  love and care they deserve. Join us for tail-wagging joy and
                  well-pampered pets!
                  <br />
                  petCare isn't just a service; it's a promise of joyous moments
                  with your furry family members.
                </h3>
              </div>

              <div
                className="Graphics-2 d-flex justify-content-center align-items-center mb-3"
                style={{ maxWidth: "2000px", marginTop: "6rem" }}
              >
                <img
                  src={Owner1}
                  alt="Dog with Owner"
                  width={800}
                  className="Dog2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                />
              </div>
            </div>

            <div className="row mt-lg-0 d-flex justify-content-center align-items-center">
              <div
                className="col-lg-4 col-md-12 mt-5"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <EmailIcon style={{ color: "#e0a800", fontSize: "4rem" }} />
                </div>
                <h2
                  style={{ color: "#f1f1f1" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Contact Us
                </h2>
                <h4
                  style={{
                    color: "#e0a800",
                    textDecoration: "underline",
                    textUnderlineOffset: "0.4rem",
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  petcare@mohitjaiswal.com
                </h4>
              </div>
              <div
                className="col-lg-4 col-md-12 mt-5"
                data-aos="fade-up"
                data-aos-duration="850"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <AccessTimeIcon
                    style={{ color: "#e0a800", fontSize: "4rem" }}
                  />
                </div>
                <h2
                  style={{ color: "#f1f1f1" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Open Hours
                </h2>
                <h4
                  style={{
                    color: "#e0a800",
                    textDecoration: "underline",
                    textUnderlineOffset: "0.4rem",
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Mon - Fri: 8:00 AM to 5:00 PM
                </h4>
              </div>
              <div
                className="col-lg-4 col-md-12 mt-5"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <LocationOnIcon
                    style={{ color: "#e0a800", fontSize: "4rem" }}
                  />
                </div>
                <h2
                  style={{ color: "#f1f1f1" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Location
                </h2>
                <h4
                  style={{
                    color: "#e0a800",
                    textDecoration: "underline",
                    textUnderlineOffset: "0.4rem",
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Pune, Maharashtra
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
