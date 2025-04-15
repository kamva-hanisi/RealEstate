import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-info">
            <h1 className="section-title">
              Find Your Dream Home with NestWise Properties
            </h1>
            <p className="section-subtitle">
              Your trusted partner in real estate, connecting people with the
              perfect properties.
            </p>

            <a href="#" className="button">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="intro" className="img-section">
        <div className="section-head">
          <div className="container">
            <img
              src="./public/about/hand.jpg"
              alt="House"
              className="intro-img"
            />
            <div className="test">
              <h2 className="head">Who We Are</h2>
              <p>
                NestWise Properties is a forward-thinking real estate agency
                committed to helping individuals and families find the perfect
                homes. With years of experience and a passion for excellence, we
                specialize in buying, selling, and renting properties that meet
                our clients' needs.
              </p>

              {/* Mission & Vision */}

              <h2 className="head">Our Purpose & Passion</h2>
              <p>
                <strong>Mission:</strong> To simplify the real estate experience
                by offering expert guidance, tailored solutions, and innovative
                property services.
              </p>
              <p>
                <strong>Vision:</strong> To be the most trusted real estate
                company, known for integrity, innovation, and exceptional client
                service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
