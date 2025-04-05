import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="he-wrapper">
      <div className="he-container">
        <a href="#">
          <img src="./public/change.png" alt="logo" width={150} />
        </a>

        <ul className="he-menu">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/Properties">Properties</a>
          </li>
          <li>
            <a href="/Service">Service</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <button className="button">
            <a href="#">Long in</a>
          </button>
        </ul>
      </div>
    </section>
  );
}

export default Header;
