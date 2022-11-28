import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaPooStorm } from "react-icons/fa";

const Navbaro = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg nav-color-1 m-0">
        <div className="container-fluid">
          <Link className="navbar-brand nav-icon" to="/">
            <FaPooStorm />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/raceresults" className="nav-link ">
                  race Results
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link ">
                  F1-News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbaro;
