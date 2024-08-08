import "../styles/Landing.css";
import WiCSLogo from "../assets/images/WiCSLogo.png";
import { Col } from "react-bootstrap";
import Typewriter from 'react-typewriter-effect';
import React, { useState } from 'react';

const Landing = () => {
  return (
    <div className="landing-container">
      <Col sm={12} md={6}>
      <h1 className="typing-effect">
        Welcome to
        <Typewriter
          textStyle={{ fontWeight: 'bold', lineHeight: '1.5' }}
          startDelay={100}
          cursorColor="black"
          multiText={[
            'Brown University Women in Computer Science!',
          ]}
          multiTextDelay={1000}
          typeSpeed={150}
          hideCursorAfterText={false}
          multiTextLoop={true}
        />
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
