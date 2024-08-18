import { Container, Row, Col, Image } from "react-bootstrap";
import { profiles } from "../assets/portraits/portraits";

const Profile = ({ name, image, title }) => {
  return (
    <Col md={4}>
      <div className="d-flex flex-column justify-content-start align-items-center m-3">
        <Image
          src={require("../assets/portraits/" + image)}
          alt={name}
          className="mb-2"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
          roundedCircle
        />
        <div
          className="text-center"
          style={{ fontWeight: "bold", color: "#182C37" }}
        >
          {name}
        </div>
        <div
          className="text-center"
          style={{ fontStyle: "italic", color: "#182C37" }}
        >
          {title}
        </div>
      </div>
    </Col>
  );
};

const Contact = () => {
  return (
    <Container className="content-container">
      <h1 className="section-header">Executive Board</h1>
      <Row className="m-5 justify-content-center">
        {profiles.map((profile) => (
          <Profile
            name={profile.name}
            image={profile.image}
            title={profile.title}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
