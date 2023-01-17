import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Slideshow from "./Carousel.jsx";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Skill from "./Skill";
import Projects from "./Projects";
import puppy from "./images/puppy.png";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

function App() {

  // React intersection observer
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div>
      <Header />
      <Container
        fluid
        ref={ref}
        className={`hidden-animation top-compartment ${inView ? "show" : ""}`}
      >
        <h1>Hi! I am lawlaw, I am a Junior Front End Developer</h1>
        <Button variant="outline-dark" href="#projects">
          Projects
        </Button>
        <Button variant="outline-dark" href="#about">
          About
        </Button>
        <Button variant="outline-dark" href="#contact">
          Contact
        </Button>
        <img className="katsu-img" src={puppy} alt="katsu-img" />
      </Container>
      <Skill />
      <Projects />
      <About />
      <Contact />
      <Footer />
      {/* <div class="bubble"></div> */}
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
