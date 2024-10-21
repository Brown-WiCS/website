import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import {
  BsFillHeartFill,
  BsPeopleFill,
  BsFillRocketFill,
} from "react-icons/bs";
import "../styles/Resources.css";

const Resources = () => {
  return (
    <div className="content-container">
      <h1 className="section-header">Resources</h1>
      <Row className="cards-container">
        <Col md={4} sm={8}>
          <div className="card mentorship">
            <div className="top-container">
              <BsFillHeartFill className="icon" size={36} />
              <h3 className="resource-title">Mentorship</h3>
              <div className="desc">
                Get paired with a peer to learn about industry, research,
                internships, and CS at Brown!
              </div>
            </div>
            <Button variant="light"
              className="button"
              href="mailto:wics@lists.cs.brown.edu"
              target="_blank">
                
              Email Us!
            </Button>
          </div>
        </Col>
        <Col md={4} sm={8}>
          <div className="card community">
            <div className="top-container">
              <BsPeopleFill className="icon" size={36} />
              <h3 className="resource-title">Community</h3>
              <div className="desc">
                Stay updated on WiCS events and other opportunities by joining our mailing list + Slack!
              </div>
            </div>
            <Button
              variant="light"
              className="button"
              href="https://forms.gle/XGeACWXtdqim9Cmt5"
              target="_blank"
            >
              Join
            </Button>
          </div>
        </Col>
        <Col md={4} sm={8}>
          <div className="card mailing">
            <div className="top-container">
              <BsFillRocketFill className="icon" size={36} />
              <h3 className="resource-title">Opportunities</h3>
              <div className="desc">
                Browse our resources on internships, hackathons, tech events,
                and so much more!
              </div>
            </div>
            <Button
              variant="light"
              className="button"
              href="https://docs.google.com/document/d/1x39l_AVrb84Z3Q3AMXhRhDoPzhroV8F4IMiGuNL5dfo/edit?usp=sharing"
              target="_blank"
            >
              View our Resources
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Resources;