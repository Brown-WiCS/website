import React from "react";
import "../styles/Navbar.css";
import WiCS from "../assets/images/WiCS.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#Landing">
          <img src={WiCS} alt="Logo" style={{ height: "72px" }} />
        </a>

        {/* Hamburger icon for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Mission">Mission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Calendar">Calendar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Resources">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Socials">Socials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Sponsors">Sponsors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contacts">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
