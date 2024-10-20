
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function ServicesCard(props) {
  return (
    <div className="services-main-card">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-4 d-flex justify-content-center align-items-center ">
          <img src={props.img} alt="Servicess" className="services-img" />
        </div>

        <div className="col-lg-8">
          <h2 className="service-name mt-3">{props.servicename}</h2>
          <p className="service-para">{props.servicepara}</p>
        </div>
      </div>
      <div className="row d-flex justify-content-end align-items-center">
        <div className="col-lg-4 services-btn">
          <CurrencyRupeeIcon /> 500
        </div>
        <div className="col-lg-4 services-btn">
          <AccessTimeIcon /> 1 hr
        </div>
      </div>
    </div>
  );
}
