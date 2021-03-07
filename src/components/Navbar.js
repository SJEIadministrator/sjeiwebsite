import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => (
  <Navbar
    sticky="top"
    bg="dark"
    className=" justify-content-between w3-animate-opacity"
    expand="lg"
  >
    <Navbar.Brand className="ml-1">
      <NavLink to="/">
        <img
          src="https://sjeiwebsitemedia.blob.core.windows.net/photos/SJEI_primary_full-name.png"
          width="160"
          height="70"
          className="d-inline-block align-top logo w3-animate-opacity "
          alt="logo-sjei"
        />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" className="link">
          SJEI
        </NavLink>
        <NavDropdown
          title="ABOUT"
          className="mr-0 aboutlink  link "
          id="basic-nav-dropdown "
        >
          <NavDropdown.Item className="nav-link" as={Link} to="/Whatwedo">
            {' '}
            What We Do
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/corporatetransparency">
            Corporate Transparency
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/board">
            Board
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/volunteer">
            Volunteer
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/william-G-Bentz">
            William G Bentz
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/team">
            Our Team
          </NavDropdown.Item>
          <NavDropdown.Item className="nav-link" as={Link} to="/Contact">
            Contact
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/take-action" className="mr-2 link">
          TAKE ACTION
        </NavLink>
        <div className="supportdiv">
          <NavLink to="/donation" className="mr-2 link support">
            SUPPORT
          </NavLink>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBar;
