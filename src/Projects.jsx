import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import mekadasite from "./images/mekadasite.jpg";
import instadexbeta from "./images/instadexbeta.jpg";

function Projects() {
  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Container
      fluid
      id="projects"
      ref={ref2}
      className={`hidden-animation ${inView2 ? "show" : ""}`}
    >
      <h1 className="projects-title">Projects</h1>
      <Row>
        <Col lg={6} md={6}>
          <Card className="card-block" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={instadexbeta} />
            <Card.Body>
              <Card.Title>InstaDex</Card.Title>
              <Card.Text>
                (Project Ongoing) A simple Pokédex web app that utilizes the
                PokeAPI. Currently under maintenance / constant development.
                Only Sandbox Ver available for now.
              </Card.Text>
              <Button href="https://eye1md.csb.app/" variant="dark">
                Try Sandbox Ver.
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="project-desc mb-5" lg={6} md={6}>
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
          </ul>
          <br />
          <h3>Project Difficulties</h3>
          <p>
            This project tested my knowledge on multiple API fetching and making
            sure that the data is received in order of the API calls. It
            presented some challenges due to the data fetching with Axios being
            async in nature. The second challenge was ensuring that the pages
            will have minimal loading for best user experience, it was tricky
            due to the nature of React Components not maintaining their states
            after unmounting.
          </p>
          <br />
          <h3>My Solution</h3>
          <p>
            Through the usage of axios.all method, I was able to make the API
            requests in order, as well as have the responses be returned in the
            order that was intended, which in turn allows the application's
            pages to be populated properly. And through moving the state of the
            child components to the parent component, and then passing the child
            component through props, I was able to retain the states of the
            child component, making sure the loading is kept at minimum.
          </p>
          <br />
          <h3>Notable Features</h3>
          <ul>
            <li>Zero buffer across pages after initial load</li>
            <li>Responsive across multiple devices</li>
          </ul>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={6}>
          <Card className="card-block" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={mekadasite} />
            <Card.Body>
              <Card.Title>PT. Mekada Abadi Website</Card.Title>
              <Card.Text>
                (Project Ongoing) An OTC (Over the Counter) medicine catalog for
                PT. Mekada Abadi, with a goal to help both clients and the sales
                team to communicate their needs with more clarity. Currently
                only planned for internal use. Database is still currently in
                development, awaiting data from client. MongoDB integration
                planned for future update.
              </Card.Text>
              <Button variant="dark" href="https://colapanmini.github.io">
                Try It!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="project-desc" lg={6} md={6}>
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>MongoDB (To be added)</li>
          </ul>
          <br />
          <h3>Project Difficulties</h3>
          <p>
            This project tested my knowledge on putting together everything that
            I have learned so far about React and Javascript to create a
            responsive website across desktop and handheld devices. Throughout
            the development of this app, I encountered a lot of new problems
            such as getting the filter function to work as intended, especially
            making it so that the search bar covers a wider range of search
            terms, and also having the category button filters work in
            conjunction with the search bar. Another challenge that I
            encountered was getting the pagination to be automated with regards
            to the data size, and at the same time accounting for page number
            clogging the field, so that no more than 7 page numbers in will be
            shown at a given time. Since this project was also done under a time
            constraint, meeting the weekly sprint targets as agreed with the
            client also presented some interesting challenges.
          </p>
          <br />
          <h3>My Solution</h3>
          <p>
            The search function problem was solved by applying some logic with
            the data array. Through the utilization of Javascript's filter
            method, I was able to pass back new arrays to be mapped according to
            the filter specifications. The pagination problem was also solved
            using a similar method of slicing the full array into sections of 12
            products, and then having the total pages be denoted according to
            the total number of products divided by the products per page
            rounded up. The sprint targets were also met through proper
            planning.
          </p>
          <br />
          <h3>Notable Features</h3>
          <ul>
            <li>Interactive Search Function</li>
            <li>Easy App Navigation</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
