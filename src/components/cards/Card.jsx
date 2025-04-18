import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="./public/house1.png" alt="logo" />
        <span className="close-btn">
          <i className="fa-solid fa-square-xmark"></i>
        </span>
      </div>
      <span className="card-local">
        <i className="fa-solid fa-location-dot"></i>
      </span>
      <div className="card-info">
        <h3>Eastern Cape, King William's Town</h3>
        <h4>
          Info{" "}
          <span>
            <i class="fa-solid fa-square-caret-down"></i>
          </span>
        </h4>
        <p>4 Bedrooms</p>
      </div>
    </div>
  );
};

export default Card;
