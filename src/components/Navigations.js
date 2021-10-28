import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

import logo_b from '../images/logomayar.png';

const Navigations = () => {

  return (
<div className="navigation">
    <Navbar bg="dark" expand="sm" fixed="top"  variant="dark">
      <Container>
      <Navbar.Brand href="/">
      <img
        src={logo_b}
        width="70"
        height="60"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start" >
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <NavDropdown title="Nos Espaces" id="basic-nav-dropdown">
              <NavDropdown.Item href="/espace-musculation">Espace de Musculation</NavDropdown.Item>
              <NavDropdown.Item href="/espace-fitness">Espace de Fitness</NavDropdown.Item>
              <NavDropdown.Item href="/espace-training">Espace de Training</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Activites" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cours-collectifs">Cours Collectif</NavDropdown.Item>
              <NavDropdown.Item href="/bac-sport" >Bac Sport</NavDropdown.Item>
              <NavDropdown.Item href="/club-enfant" >Club Enfant</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Tarifs">Tarifs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
};

export default Navigations;
