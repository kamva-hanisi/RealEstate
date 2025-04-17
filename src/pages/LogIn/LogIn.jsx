import React from "react";
import "./LogIn.css";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="su-container">
      <h1>Log In</h1>

      <div>
        <form className="su-form">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="Type your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              autoComplete="off"
              placeholder="Type your Password"
            />

            <p>
              Forgot your password?{" "}
              <NavLink to="/forgot-password" className="btn btn-link">
                Reset Password
              </NavLink>
            </p>
            <button type="submit" className="btn btn-outline-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
