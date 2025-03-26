import React from "react";

function Hero() {
  return (
    <section className="hero-wrapper" id="hero-wrapper">
      <img src="./public/Hero section.png" alt="hero" />
      <div className="hero-container">
        <div className="hero-info">
          <h1 className="hero-headline">Find Your Dream Home with Ease.</h1>
          <p className="hero-para">
            Discover premium properties in the best locations, tailored to your
            lifestyle and budget. Buy, sell, or rent with confidence.
          </p>
          <a href="#" className="button">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
