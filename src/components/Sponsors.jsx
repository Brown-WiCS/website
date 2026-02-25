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
  const platinumSponsors = sponsor_info.filter(
    (sponsor) => sponsor.tier === "platinum"
  );
  const moreSponsors = sponsor_info.filter(
    (sponsor) => sponsor.tier === "more"
  );
  return (
    <Container className="content-container">
  <h1 className="section-header">Our Sponsors</h1>

  {/* Row to hold both Gold and Silver sections side by side */}
  <Row className="m-3 justify-content-center align-items-start">


    {/* Platinum Sponsors Section */}
    <Col xs={12} md={6} className="platinum-sponsors text-center">
      {/* <h2 className="section-subheader platinum">Platinum</h2> */}
      <Row className="m-3 justify-content-center align-items-center">
        {platinumSponsors.map((sponsor, index) => (
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
    </Col>

    {/* Gold Sponsors Section */}
    <Col xs={12} md={6} className="gold-sponsors text-center">
      {/* <h2 className="section-subheader gold">Gold</h2> */}
      <Row className="m-3 justify-content-center align-items-center">
        {goldSponsors.map((sponsor, index) => (
          <Col
            key={index}
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <Image
              src={require("../assets/sponsors/" + sponsor.logo)}
              alt={sponsor.company}
              style={{ width: "300px", objectFit: "contain", paddingTop: "20px", paddingRight: "20px"}}
            />
          </Col>
        ))}
      </Row>
    </Col>

    {/* Silver Sponsors Section */}
    <Col xs={12} md={6} className="silver-sponsors text-center">
      {/* <h2 className="section-subheader silver">Silver</h2> */}
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
    </Col>

    {/* More Sponsors Section */}
<Col xs={12} className="more-sponsors text-center">
  <Row className="justify-content-center g-4">
    {moreSponsors.map((sponsor, index) => (
      <Col
        key={index}
        xs={12}
        sm={6}
        md={4}
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
            padding: "10px 0",
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
  <SponsorsButton/>
</Container>
  );
};

function SponsorsButton() {
  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd89jRvjXYybhnbiAhPwoSM2swd7O3K4yyiVBYe2PqYxMcMng/viewform?usp=sf_link" rel="noreferrer" target="_blank" >
      <button
        class="btn btn-primary"
        style={{ "background-color": "#182C37", border: "#182C37" }}
      >
        <span style={{ fontSize: "20px", padding: "40px"}}>Sponsor Us</span>
      </button>
    </a>
  );
}

export default Sponsors;
