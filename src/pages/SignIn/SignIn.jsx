import React from "react";
import "./SignIn.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="su-container">
      <h1>Sign In</h1>

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
            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="terms">
              <NavLink to="/forgot-password" className="btn btn-link">
                Forgot password?
              </NavLink>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Log In
            </button>
          </div>
          <div className="signup">
            <p>
              Don't have an account?<a href="/signup"> Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
