import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  socials1,
  socials2,
  socials3,
  socials4,
  socials5,
  socials6,
} from "../assets/socials_images/socials";
import "../styles/Socials.css";
import ImageCarousel from "./ImageCarousel";

const Socials = () => {
  return (
    <Container className="content-container">
      <h1 className="section-header">Stay Connected</h1>
      <div className="text-center">
        <h3 class="social-subheading">
          Follow us on{" "}
          <a href="https://www.instagram.com/brownuwics/" class="link-text">
            Instagram
          </a>{" "}
          ! To stay updated on our events subscribe to the WiCS Mailing List and
          join our Slack below.
        </h3>
      </div>
      <ImageCarousel />
      {/* <Row>
        <Col md={4}>
          <Image src={socials1} className="image-style" thumbnail />
        </Col>
        <Col md={4}>
          <Image src={socials2} className="image-style" thumbnail />
        </Col>
        <Col md={4}>
          <Image src={socials3} className="image-style" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src={socials4} className="image-style" thumbnail />
        </Col>
        <Col md={4}>
          <Image src={socials5} className="image-style" thumbnail />
        </Col>
        <Col xs={12} md={4}>
          <Image src={socials6} className="image-style" thumbnail />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Socials;
