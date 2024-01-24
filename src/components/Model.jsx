import React, { useEffect } from "react";
//import css
import "../index.css";
const Model = ({ title, messege, icon, func }) => {
  return (
    <div className="animate__animated animate__fadeIn modal">
      <div
        className="animate__animated animate__zoomIn animate__delay-.5s card d-flex justify-content-center align-items-center shadow p-3"
        style={{ width: "20rem" }}
      >
        <img src={icon} alt="icon" style={{ width: "100px" }} />
        <div className="header">
          <h3>{title}</h3>
        </div>
        <div>
          <p className="text-center">{messege}</p>
        </div>
        <div>
          <button className="btn btn-danger" onClick={func}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
