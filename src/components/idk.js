import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { sponsor_info } from "../assets/sponsors/sponsor_info";

const Sponsors = () => {
  // Splitting the sponsor_info into two groups based on their type
  const primarySponsors = sponsor_info.filter(
    (sponsor) => sponsor.type === "primary"
  );
  const secondarySponsors = sponsor_info.filter(
    (sponsor) => sponsor.type === "secondary"
  );

  return (
    <Container className="content-container">
      {/* Primary Sponsors Section */}
      <h1 className="section-header">Our Primary Sponsors</h1>
      <Row className="m-5 justify-content-center align-items-center">
        {primarySponsors.map((sponsor, index) => (
          <Col
            key={index}
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <Image
              src={require("../assets/sponsors/" + sponsor.logo)}
              alt={sponsor.company}
              style={{ width: "300px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>

      {/* Secondary Sponsors Section */}
      <h1 className="section-header">Our Secondary Sponsors</h1>
      <Row className="m-5 justify-content-center align-items-center">
        {secondarySponsors.map((sponsor, index) => (
          <Col
            key={index}
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <Image
              src={require("../assets/sponsors/" + sponsor.logo)}
              alt={sponsor.company}
              style={{ width: "300px", objectFit: "contain" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sponsors;
