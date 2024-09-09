import React, { useEffect } from "react";
import "../styles/Navbar.css";
import WiCS from "../assets/images/WiCS.png";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation(); // Get the current route

  useEffect(() => {
    // Scroll to the top when the pathname (route) changes
    window.scrollTo(0, 0);
  }, [pathname]); // Run the effect when the pathname changes
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a>
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
