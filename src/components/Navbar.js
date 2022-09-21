import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigateBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark navbar-expand-md fixed-top">
      <Container>
        <Navbar.Brand href="#home">Gervasio Riveiro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto h5">
            <Nav.Link className="px-4" href="aboutme" >About Me</Nav.Link>
            <Nav.Link className="px-4" href="#link">My Work</Nav.Link>
            <Nav.Link className="px-4" href="#link">My Work</Nav.Link>
            <Nav.Link className="px-4" href="#link">My Skills</Nav.Link>
            <Nav.Link className="px-4" href="#link">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateBar;