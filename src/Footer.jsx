import { Container } from "react-bootstrap";

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="bg-dark site-footer">
            <Container fluid>
                <p className="copyright-text">© lawlaw {year}</p>
            </Container>
        </footer>
    )
}

export default Footer;