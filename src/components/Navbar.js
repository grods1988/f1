import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navbaro = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="toolbar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-secondary">
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-secondary">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/raceresults"
                className="text-decoration-none text-secondary"
              >
                Race results
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/news" className="text-decoration-none text-secondary">
                F1-News
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbaro;
