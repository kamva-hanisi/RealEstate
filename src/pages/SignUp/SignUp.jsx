import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";

const SignUp = () => {
  return (
    <div className="su-container">
      <h1>Sign Up</h1>
      <p>Sign up to get started</p>
      <div>
        <form className="su-form">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              autoComplete="off"
              placeholder="Enter your Password"
            />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="text"
              id="confirm-password"
              autoComplete="off"
              placeholder="Confirm your Password"
            />
            <checkbox className="checkbox">
              <input type="checkbox" id="terms" name="terms" value="yes" />
              Remember me
            </checkbox>
            <p>
              By signing up, you agree to our
              <a href="#">Terms of Service</a>
            </p>
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an account ?</p>
          <NavLink to="/login" className="btn btn-primary">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
