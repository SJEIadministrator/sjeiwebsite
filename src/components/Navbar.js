import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => (
  <Navbar
    sticky="top"
    bg="dark"
    className=" justify-content-between"
    expand="lg"
  >
    <Navbar.Brand className="ml-1">
      <NavLink to="/" className="link">
        <img
          src="https://images.squarespace-cdn.com/content/5938c91cbe65945cac32a872/1519251724393-SSWG00WSO8NY676L8UNP/SJEI_primary_full-name.png?format=1000w"
          width="160"
          height="70"
          className="d-inline-block align-top logo "
          alt="logo-sjei"
        />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" className="mr-4 link">
          SJEI
        </NavLink>
        <NavDropdown
          title="ABOUT"
          className="mr-4 pt-2 about link "
          id="basic-nav-dropdown "
        >
          <NavDropdown.Item a>
            <NavLink to="/Whatwedo">What We Do</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/corporatetransparency">Corporate Transparency</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/board">Board</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/volunteer">Volunteer</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/william-G-Bentz">William G Bentz</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/team">Our Team</NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item a>
            <NavLink to="/Contact">Contact</NavLink>
          </NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/take-action" className="mr-2 link">
          TAKE ACTION
        </NavLink>
        <a
          href="https://medium.com/sjei"
          target="_blank"
          className="anchor mr-3 link"
        >
          BLOG
        </a>
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
