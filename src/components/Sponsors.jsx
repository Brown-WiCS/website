import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { sponsor_info } from "../assets/sponsors/sponsor_info";

const Sponsors = () => {
  const goldSponsors = sponsor_info.filter(
    (sponsor) => sponsor.tier === "gold"
  );
  const silverSponsors = sponsor_info.filter(
    (sponsor) => sponsor.tier === "silver"
  );
  return (
    <Container className="content-container">
      <h1 className="section-header">Our Sponsors</h1>

      {/* Gold Sponsors Section */}
      <h2 className="section-subheader gold">Gold</h2>
      <Row className="m-3 justify-content-center align-items-center">
        {goldSponsors.map((sponsor, index) => (
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

      {/* Silver Sponsors Section */}
      <h2 className="section-subheader silver">Silver</h2>
      <Row className="m-3 justify-content-center align-items-center">
        {silverSponsors.map((sponsor, index) => (
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
