
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Yellow1 from "../assets/Vector/Yellow1.png";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/ContextAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(""); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [email, setEmail] = useState("");
  const { isLoggedIn } = useAuth("");
  const navigate = useNavigate("");
  const { storeToken } = useAuth("");

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://petcare-api.onrender.com/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res_data = await res.json();

      if (res.ok) {
        setEmail("");
        setPassword("");

        storeToken(res_data.token);

        toast.success("Logged in Successfully");
        navigate("/");
      } else {
        if (res_data.msg) {
          const errorMessage = res_data.msg[0].message;
          toast.error(errorMessage);
        } else {
          toast.error("Invalid credentials");
        }
      }
    } catch (error) {
      toast.error("User login error");
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
            Login to{" "}
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
          <img
            src={Yellow1}
            alt="Yellow1"
            className="Yellow1"
            style={{ marginTop: "-8rem" }}
          />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12 mt-3 form-main-card d-flex justify-content-center align-items-center">
              <form
                style={{ width: "100%" }}
                method="POST"
                onSubmit={submitLogin}
              >
                <h1
                  className="form-title"
                  style={{
                    textDecoration: "underline 2px",
                    textUnderlineOffset: "5px",
                  }}
                >
                  Your login credentials
                </h1>

                {/* Row 1 inside form */}
                <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
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
                          onChange={(e) => setPassword(e.target.value)}
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

                <div className="d-flex justify-content-center align-items-center">
                  <p
                    style={{
                      marginTop: "2rem",
                      lineHeight: "25px",
                      fontSize: "1.1rem",
                      color: "#f1f1f1",
                    }}
                  >
                    If you don't have an account on petCare, then{" "}
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
                        to="/createuser"
                      >
                        create your account here
                      </Link>
                    </b>
                  </p>
                </div>

                <div className="row">
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
          </div>
        </div>
      </div>
    </section>
  );
}
