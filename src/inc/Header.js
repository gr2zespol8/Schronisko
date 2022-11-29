import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../assets/logo.png';

function Header() {
    return (
      <div className="home">
        <header>
        <Navbar expand="lg">
          <Container>
              <Navbar.Brand href="/">
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Animals">Animals</Nav.Link>
                  <Nav.Link href="/Admin">Admin</Nav.Link>
                  <Nav.Link href="/Signup">Login or Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse> 
          </Container>
        </Navbar>
        
        </header>
      
    </div>
    )
  }

  export default Header