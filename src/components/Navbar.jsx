import React from "react";
import "../styles/Navbar.css";
import WiCS from "../assets/images/WiCS.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#Landing">
          <img src={WiCS} alt="Logo" />
        </a>
      </div>
      <ul className="navbar-sections">
      <li className="Resources">
          <Link to="/">Home</Link>
          {/* <a href="#Resources">Resources</a> */}
        </li>
        {/* <li className="Mission mission-header">
          <a href="#Mission">Mission</a>
        </li>
        <li className="Calendar">
          <a href="#Calendar">Calendar</a>
        </li> */}
        <li className="Resources">
          <Link to="/resources">Resources</Link>
          {/* <a href="#Resources">Resources</a> */}
        </li>
        {/* <li className="Socials">
          <a href="#Socials">Socials</a>
        </li>
        <li className="Sponsors">
          <a href="#Sponsors">Sponsors</a>
        </li>
        <li className="Contacts">
          <a href="#Contacts">Contact Us</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
