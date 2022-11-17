import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap'
import  logo from './logo.png';

function Home() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt="LOGO"
              src={logo}
              width="276"
              height="90"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link to="/link">Animals</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#link">Login or Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Home