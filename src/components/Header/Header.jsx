import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="he-wrapper">
      <div className="he-container">
        <a href="#">
          <img src="./public/logo.png" alt="logo" width={100} />
        </a>

        <div className="he-menu">
          <a href="#">About us</a>
          <a href="#">Properties</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
          <button className="button">
            <a href="#">Long in</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
