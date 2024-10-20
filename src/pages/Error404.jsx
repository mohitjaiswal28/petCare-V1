
import React from "react";
import Error404Img from "../assets/Graphics/1.png";

export default function Error404() {
  return (
    <div className="Error" id="about">
      <h1 className="heading-text ls-wide mt-5">Oops! page not found</h1>
      <div className="Error404">
        <img src={Error404Img} alt="404" style={{ borderRadius: "20px" }} />
      </div>
      <h2 className="heading-text">Something's wrong here</h2>
      <div className="ErrorMsg d-flex justify-content-center align-items-center">
        <h2 className="para-1" style={{ color: "#f1f1f1" }}>
          This is a 404 error, which means you've clicked on a bad link or
          entered an invalid URL.
          <br />
          Maybe what you are looking for can be found at{" "}
          <strong>
            <a href="/" style={{ color: "#e0a800" }}>
              petcare.mohitjaiswal.com
            </a>
          </strong>
        </h2>
      </div>
    </div>
  );
}
