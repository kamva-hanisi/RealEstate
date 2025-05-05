import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero-wrapper" id="hero-wrapper">
        <div className="container">
          <div className="hero-info">
            <h1 className="hero-headline">Find Your Dream Home with Ease.</h1>
            <p className="hero-para">
              Discover premium properties in the best locations, tailored to
              your lifestyle and budget. Buy, sell, or rent with confidence.
            </p>
            <a href="#" className="btn">
              Explore Now
            </a>
          </div>
        </div>
      </section>

      <form>
        <div className="container">
          <div class="coolinput">
            <label for="input" className="text">
              location:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="location"
              className="input"
            />
          </div>
          <div className="coolinput">
            <label for="input" className="text">
              House:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="House"
              className="input"
            />
          </div>
          <div className="coolinput">
            <label for="input" className="text">
              budget:
            </label>
            <input
              type="text"
              placeholder="Write here..."
              name="budget"
              className="input"
            />
          </div>
          <a href="#" className="btn">
            Search Now
          </a>
        </div>
      </form>
    </div>
  );
}

export default Hero;
