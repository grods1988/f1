import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Toolbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" className="toolbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Past Race results</Nav.Link>
            <Nav.Link href="news">F1-News</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Toolbar;
