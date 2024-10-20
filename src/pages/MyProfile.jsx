
import { useAuth } from "../store/ContextAPI";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const MyProfile = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <section id="about">
        <div className="container-fluid px-0">
          <div className="container">
            <div className="row mt-lg-0 d-flex justify-content-center align-items-center">
              <h1
                className="heading-text ls-wide"
                data-aos="fade-up"
                data-aos-duration="550"
              >
                Welcome, {user.name} to{" "}
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

              <Grid
                container
                justifyContent="center"
                alignItems="start"
                style={{ height: "120vh", marginTop: "3rem" }}
                spacing={3}
                data-aos="fade-up"
                data-aos-duration="550"
              >
                {/* First Half */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={3}
                    style={{
                      padding: "20px",
                      paddingTop: "0rem",
                      textAlign: "center",
                      backgroundColor: "transparent",
                      color: "#f1f1f1",
                    }}
                  >
                    <h1
                      className="side-heading-text"
                      style={{ fontSize: "2rem" }}
                    >
                      Owner Details
                    </h1>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Name:</strong>{" "}
                        {user.name}
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Email:</strong>{" "}
                        {user.email}
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Gender:</strong>{" "}
                        {user.gender}
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Phone:</strong>{" "}
                        {user.phno}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>

                {/* Second Half */}
                <Grid item xs={12} md={6}>
                  <Paper
                    elevation={3}
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "transparent",
                      color: "#f1f1f1",
                    }}
                  >
                    <h1 className="side-heading-text">Pet Details</h1>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Pet name:</strong>{" "}
                        {user.petname}
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>Pet age:</strong>{" "}
                        {user.petage} yrs
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>
                          Pet weight:
                        </strong>{" "}
                        {user.petweight} kgs
                      </Typography>
                    </div>
                    <div className="text-start">
                      <Typography
                        variant="subtitle1"
                        style={{ fontSize: "1.3rem" }}
                        className="mx-3"
                      >
                        <strong style={{ color: "#d4ac32" }}>
                          Type of pet:
                        </strong>{" "}
                        {user.typeofpet}
                      </Typography>
                    </div>
                  </Paper>
                </Grid>

                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button
                      className="second-btn"
                      style={{
                        width: "100%",
                        height: "100%",
                        lineHeight: "2rem",
                      }}
                      onClick={() => navigate("/logout")}
                    >
                      Logout <LogoutIcon />
                    </button>
                  </div>

                  <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                    <button
                      className="main-btn"
                      style={{
                        width: "100%",
                        height: "100%",
                        lineHeight: "2rem",
                      }}
                      onClick={() => navigate("/bookyourapp")}
                    >
                      Book appointment now <DoneIcon />
                    </button>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
