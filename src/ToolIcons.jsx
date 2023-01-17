import NodeJSLogo from "./images/2560px-Node.js_logo.svg.png";
import BootstrapLogo from "./images/Bootstrap_logo.svg.png";
import GitIcon from "./images/Git-Icon-1788C.png";
import ReactIcon from "./images/React-icon.svg.png";
import CSSIcon from "./images/css-3.png";
import EJSIcon from "./images/file_type_ejs_icon_130626.png";
import HTMLIcon from "./images/html-5.png";
import JSIcon from "./images/js.png";
import { Container, Row, Col } from "react-bootstrap";

function ToolIcons() {
  return (
    <Container>
      <Row>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={HTMLIcon} alt="html-icon" />
          <p className="icon-desc">HTML</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={CSSIcon} alt="css-icon" />
          <p className="icon-desc">CSS</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={JSIcon} alt="js-icon" />
          <p className="icon-desc">JavaScript</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img
            className="skill-icons"
            src={BootstrapLogo}
            alt="bootstrap-icon"
          />
          <p className="icon-desc">Bootstrap</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={GitIcon} alt="git-icon" />
          <p className="icon-desc">Git</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={ReactIcon} alt="react-icon" />
          <p className="icon-desc">React</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={EJSIcon} alt="ejs-icon" />
          <p className="icon-desc">EJS</p>
        </Col>
        <Col className="align-self-end" lg={3} md={3} sm={3} xs={3}>
          <img className="skill-icons" src={NodeJSLogo} alt="nodejs-icon" />
          <p className="icon-desc">NodeJS</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ToolIcons;
