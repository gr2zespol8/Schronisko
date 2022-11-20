import React from 'react'
import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import  logo from './logo.png';
import DbOperations from '../db-operations';

function Home() {
  return (
    <div className="home">
      <header>
      <Navbar expand="lg">
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
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link >Animals</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
                <Nav.Link href="#link">Login or Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>

      <main>
        <DbOperations />
      </main>


    
    <footer class="py-5 my-5 bg-dark">
      <Container className="px-4">
        <p class="text-center text-white">
        Friendly Shelter Ltd <br/>
        42 Purring Street <br/>
        East Birmington
        </p>
      </Container>
    </footer>
    
  </div>
  )
}



export default Home

