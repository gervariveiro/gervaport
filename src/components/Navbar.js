import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-scroll';

function NavigateBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark navbar-expand-md fixed-top">
      <Container>
        <Navbar.Brand>
          <Link href="Home">Gervasio Riveiro</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto h5">
            <Nav.Link className="px-4">
              <Link to="Home">ABOUT ME</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="Mywork">WORK</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="Myskills">SKILLS</Link>
            </Nav.Link>
            <Nav.Link className="px-4">
              <Link to="ContactMe">CONTACT</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateBar;


/*<form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input name="Archivo" type="file" accept=".jgp, .jpeg, .png, .pdf" required>
                <input type="submit" value="Send" />
            </form>*/