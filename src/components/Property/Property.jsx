import React from "react";
import "./Property.css";
// import { useState } from "react";

const Property = () => {
  return (
    <section className="property">
      <div className="property-info">
        <h2 className="property-title">Our Popular Residence</h2>

        <a href="#" className="property-btn">
          Explore More
          <img src="/public/arrow.svg" alt="arrow" className="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Property;
