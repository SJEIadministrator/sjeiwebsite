import React from 'react';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const About = () => (
  <Col md={5}>
    <ul>
      <li className="about-wedo">ABOUT</li>
      <li><NavLink to="/what-we-do" className="navlink-list">WHAT WE DO</NavLink></li>
      <li><NavLink to="/contact" className="navlink-list">CONTACT</NavLink></li>
      <li><NavLink to="/corporate-transparency" className="navlink-list">CORPORATE TRANSPARENCY</NavLink></li>
      <li><NavLink to="/board" className="navlink-list">BOARD</NavLink></li>
      <li><NavLink to="volunteer" className="navlink-list">VOLUNTEER</NavLink></li>
      <li><NavLink to="/williambentz" className="navlink-list">WILLIAM G BENTZ</NavLink></li>
    </ul>
  </Col>
);

export default About;
