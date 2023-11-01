import React from "react";
import "../styles/Navbar.css";
import WiCS from "../assets/images/WiCS.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#Landing">
          <img src={WiCS} alt="Logo" />
        </a>
      </div>
      <ul className="navbar-sections">
        <li className="Mission mission-header">
          <a href="#Mission">Mission</a>
        </li>
        <li className="Calendar">
          <a href="#Calendar">Calendar</a>
        </li>
        <li className="Resources">
          <a href="#Resources">Resources</a>
        </li>
        <li className="Socials">
          <a href="#Socials">Socials</a>
        </li>
        <li className="Sponsors">
          <a href="#Sponsors">Sponsors</a>
        </li>
        <li className="Contacts">
          <a href="#Contacts">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
