import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paytym from '../images/Paytym.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';



const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img src={Paytym} className="img-fluid mt-4" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Button className="d-btn">Download</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;