import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar sticky="top" bg="dark" className=" justify-content-between" expand="lg">
    <Navbar.Brand className="ml-5">
      <NavLink to="/" className="mr-5 link">
        <img
          src="https://images.squarespace-cdn.com/content/5938c91cbe65945cac32a872/1519251724393-SSWG00WSO8NY676L8UNP/SJEI_primary_full-name.png?format=1000w"
          width="160"
          height="70"
          className="d-inline-block align-top logo"
          alt="logo-sjei"
        />
      </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="ml-auto">
      <NavLink to="/" className="mr-4 link">SJEI</NavLink>
      <NavLink to="/what-we-do" className="mr-3 link">ABOUT</NavLink>
      <NavLink to="/take-action" className="mr-3 link">TAKE ACTION</NavLink>
      <a href="https://medium.com/sjei" target="blank" className="anchor mr-3">BLOG</a>
      <NavLink to="/donation" className="mr-2 link support">SUPPORT</NavLink>
    </Nav>
  </Navbar>
);
export default NavBar;
