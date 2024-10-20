
import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import petCareLogo from "../assets/Others/petCare - Logo.png";
import PetsIcon from "@mui/icons-material/Pets";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import HiveIcon from "@mui/icons-material/Hive";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useAuth } from "../store/ContextAPI";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const isMobile = window.innerWidth <= 767;
  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={petCareLogo} width={120} className="logo" alt="Logo"/>
          </a>
          <button
            className="navbar-toggler ml-auto custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home{" "}
                  <span>
                    <PetsIcon />
                  </span>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/aboutus">
                  About Us{" "}
                  <span>
                    <EmojiNatureIcon />
                  </span>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/services">
                  Services{" "}
                  <span>
                    <HiveIcon />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact Us <BugReportIcon />{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/simba">
                  Talk to Simba{" "}
                  <sup
                  className={isMobile ? "mobile-sup" : ""}
                  color="#e8b923"
                  >
                    {" "}
                    <span style={{ color: '#e8b923', fontWeight: "bolder" }}>PRO</span>
                  </sup>
                </Link>
              </li>

              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/myprofile"
                  >
                    Me{" "}
                    <span>
                      <AccountBoxIcon style={{ fontSize: "1.8rem" }} />
                    </span>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link className="nav-link" aria-current="page" to="/logout">
                    <Button label="Logout" c="login-btn" type="logout" />
                  </Link>
                ) : (
                  <Link className="nav-link" aria-current="page" to="/login">
                    <Button label="Login" c="login-btn" type="login" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
