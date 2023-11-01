import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { sponsor_info } from "../assets/sponsors/sponsor_info";

const Sponsors = () => {
  return (
    <Container className="content-container">
      <h1 className="section-header">Our Sponsors</h1>
      <Row className="m-5 justify-content-center align-items-center">
        {sponsor_info.map((sponsor) => (
          <Col className="d-flex flex-column justify-content-start align-items-center m-3">
						<Image
							src={require("../assets/sponsors/" + sponsor.logo)}
							alt={sponsor.company}
							style={{
								width: "300px",
								objectFit: "contain",
							}}
						/>
					</Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sponsors;
