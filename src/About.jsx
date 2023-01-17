import { Container, Row, Col } from "react-bootstrap";
import shark from "./images/shark.png";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref3, inView3] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Container
      fluid
      ref={ref3}
      id="about"
      className={`slanted-bg-2 hidden-animation-about ${
        inView3 ? "show-about" : ""
      }`}
    >
      <h1 className="about-title">About Me</h1>
      <Row className="about-row">
        <Col className="col-custom" lg={6} md={12}>
          <img className="star-icon" src={shark} alt="star-icon" />
        </Col>
        <Col className="col-custom-text" lg={6} md={12}>
          <p className="about-text">
            {" "}
            Prior to tech, I worked in the Palm Oil Sector as a Sustainability
            Certification Officer. The work involved both facilitating as well
            as conducting audits to ensure a smooth certification process for
            the company's products.
          </p>
          <p className="about-text">
            In 2022, I decided to pursue my passion in Front End Development.
            Taking on a new challenge is by no means an easy feat, but
            perserverance allowed me to absorb the new concepts quickly, and I
            strive to keep on improving as the days pass.
          </p>
          <p className="about-text">
            My hobbies include basketball, drafting new projects, cooking, as
            well as studying social sciences. I occasionally do personal food
            reviews too.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
