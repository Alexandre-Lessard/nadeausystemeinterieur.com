import { Link as ScrollLink } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./nsi_logo.png"

function Navibar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-middle"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link >
              <ScrollLink to="services">
                Services
              </ScrollLink>
            </Nav.Link>
            <Nav.Link >
              <ScrollLink to="faq">
                Faq
              </ScrollLink>
            </Nav.Link>
            <Nav.Link >
              <ScrollLink to="contact">
                Nous joindre
              </ScrollLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navibar;