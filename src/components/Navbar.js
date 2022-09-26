import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';

function NavigateBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark navbar-expand-md fixed-top">
      <Container>
        <Navbar.Brand href="home">
          <Link to="Home">Gervasio Riveiro</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto h5">
            <Nav.Link className="px-4">
              <Link to="Home">About Me</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="Mywork">My Work</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="Myskills">My Skills</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="ContactMe">Contact Me</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateBar;