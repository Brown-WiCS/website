import * as React from "react";
import "../styles/Landing.css";
import WiCSLogo from "../assets/images/WiCSLogo.png";
import { Col } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="landing-container">
      <Col sm={12} md={6}>
        <h1
          style={{ "font-size": "42px", "font-color": "182C37" }}
          className="lh-base"
        >
          We are <b>Brown University Women in Computer Science</b>
        </h1>
        <div style={{ "font-size": "20px" }}>
          Brown University's social and professional community to support and
          empower women pursuing CS!
        </div>
        <br />
        <LandingButton />
      </Col>
      <Col sm={12} md={6} className="d-flex justify-content-end">
        <img src={WiCSLogo} style={{ "max-width": "80%" }} alt="Logo" />
      </Col>
    </div>
  );
};

function LandingButton() {
  return (
    <a href="#Resources" rel="noreferrer">
      <button
        class="btn btn-primary"
        style={{ "background-color": "#182C37", border: "#182C37" }}
      >
        <span style={{ "font-size": "20px" }}>Get Involved</span>
      </button>
    </a>
  );
}

export default Landing;
