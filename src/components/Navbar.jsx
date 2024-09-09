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
          <Link to="/home">Home</Link>
        </li>
        <li className="Resources">
          <Link to="/resources">Resources</Link>
        </li>
        {/* <li className="Blog">
          <Link to="/blog">Blog</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
