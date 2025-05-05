import React from "react";
import "./Header.css";
import { NavLink } from "react-router";

function Header() {
  return (
    <section className="he-wrapper">
      <div className="he-container">
        <NavLink to="/">
          <img src="./public/change.png" alt="logo" width={150} />
        </NavLink>

        <ul className="he-menu">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/properties">Properties</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <NavLink className="sign-btn">
            <NavLink to="/signin">Sign in</NavLink>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}

export default Header;
