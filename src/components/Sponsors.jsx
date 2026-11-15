import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { sponsor_info } from "../assets/sponsors/sponsor_info";

const Sponsors = () => {
  const sponsors = sponsor_info.filter((sponsor) => sponsor.show);
  return (
    <Container className="content-container">
      <h1 className="section-header">Our Sponsors</h1>

      <Row className="m-3 justify-content-center align-items-start">
      <Col xs={12} className="text-center">
      <Row className="justify-content-center g-4">
        {sponsors.map((sponsor) => (
          <Col
            key={sponsor.company}
            xs={12}
            sm={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            {/* Fixed-size box so every logo aligns */}
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 24px",
              }}
            >
              <Image
                src={require("../assets/sponsors/" + sponsor.logo)}
                alt={sponsor.company}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                fluid
              />
            </div>
          </Col>
        ))}
      </Row>
      </Col>
      </Row>

      <br></br>
      <SponsorsButton />
    </Container>
  );
};

function SponsorsButton() {
  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd89jRvjXYybhnbiAhPwoSM2swd7O3K4yyiVBYe2PqYxMcMng/viewform?usp=sf_link" rel="noreferrer" target="_blank" >
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "#182C37", border: "#182C37" }}
      >
        <span style={{ fontSize: "20px", padding: "40px"}}>Sponsor Us</span>
      </button>
    </a>
  );
}

export default Sponsors;
