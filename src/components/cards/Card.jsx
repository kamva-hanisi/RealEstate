import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <img src="./public/house1.png" alt="Card Image" className="card-image" />
      <div className="local">
        <i className="fa-solid fa-location-dot"></i>
      </div>
      <h2 className="card-title">Easten Cape, King William's Town</h2>
      <div className="card-info">
        <div>
          <i className="fa-solid fa-calendar-days"></i> 2 days ago
        </div>
        <div className="fa-solid fa-money">R 1,500,000</div>
        <div className="card-icons">
          <div>
            <i className="fa-solid fa-bed"></i> 3 Beds
          </div>
          <div>
            <i className="fa-solid fa-bath"></i> 2 Baths
          </div>
          <div>
            <i className="fa-solid fa-square"></i> 200 m²
          </div>
          <div>
            <i className="fa-solid fa-car"></i> 2 Garage
          </div>
        </div>
        <div className="card-icon">
          <i className="fa-solid fa-eye"></i> 10 people viewed this
          <i className="fa-solid fa-heart"></i> 5 people saved this
          <i className="fa-solid fa-share-nodes"></i> 3 people shared this
        </div>
        <div className="card-buttons">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
