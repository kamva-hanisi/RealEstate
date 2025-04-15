import React from "react";
import "./About.css";
import { NavLink } from "react-router";

const About = () => {
  return (
    <div className="bodie">
      <section className="navbar">
        <div className="logo-container">
          <NavLink to="/">
            <img src="./public/change.png" alt="logo" width={150} />
          </NavLink>
        </div>
      </section>

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

      <section className="section">
        <h2 className="head">What Drives Us</h2>
        <div className="values">
          <div className="card">
            <h3>Integrity</h3>
            <p>
              We are committed to transparency and honesty in every transaction.
            </p>
          </div>
          <div className="card">
            <h3>Excellence</h3>
            <p>We go above and beyond to provide top-tier service.</p>
          </div>
          <div className="card">
            <h3>Innovation</h3>
            <p>
              Leveraging technology to enhance the property search experience.
            </p>
          </div>
          <div className="card">
            <h3>Customer-Centric</h3>
            <p>Your needs are our top priority.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="head">Meet Our Experts</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="./public/about/person.jpg" alt="Rollins" />
            <h3>Rollins Jali</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="./public/about/khanyi.jpg" alt="Jennifer" />
            <h3>Jennifer Sibanyoni</h3>
            <p>Senior Agent</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="head">Why Homebuyers & Sellers Trust Us</h2>
        <div className="hex-container">
          <div>
            <div className="hex">500+</div>
            <div className="info">Happy Homeowners</div>
          </div>
          <div>
            <div className="hex">10+</div>
            <div className="info">Years of Industry Experience</div>
          </div>
          <div>
            <div className="hex">100%</div>
            <div className="info">Customer Satisfaction</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
