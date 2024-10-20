
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a href="/" className="text-decoration-none" rel="noreferrer">
          <small
            className="para-2"
            style={{
              letterSpacing: "0.5px",
              wordSpacing: "0.01rem",
              fontWeight: "normal",
            }}
          >
            © 2024 petCare. Developed by Mohit Jaiswal <span className="website-text">(mohitjaiswal.me)</span>
          </small>
        </a>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <ul>
          <li>
            <a href="https://mohitjaiswal.me/" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <div className="icon-container d-flex justify-content-center align-items-center">
                  <LanguageIcon />
                </div>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohitjaiswal28/"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <div className="icon-container d-flex justify-content-center align-items-center">
                  <LinkedInIcon />
                </div>
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mohitjaiswal28" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <div className="icon-container d-flex justify-content-center align-items-center">
                  <GitHubIcon />
                </div>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mohitjaiswal.28/"
              target="_blank"
              rel="noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <div className="icon-container-big d-flex justify-content-center align-items-center">
                  <InstagramIcon />
                </div>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
