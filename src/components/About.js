import React from "react";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const About = () => (
  <Col md={4}>
    <ul>
      <li className="about-wedo">ABOUT</li>
      <li>
        <NavLink to="/Whatwedo" className="navlink-list">
          WHAT WE DO
        </NavLink>
      </li>

      <li>
        <NavLink to="/corporatetransparency" className="navlink-list">
          CORPORATE TRANSPARENCY
        </NavLink>
      </li>
      <li>
        <NavLink to="/board" className="navlink-list">
          BOARD
        </NavLink>
      </li>
      <li>
        <NavLink to="volunteer" className="navlink-list">
          VOLUNTEER
        </NavLink>
      </li>
      <li>
        <NavLink to="/William-G-Bentz" className="navlink-list">
          WILLIAM G BENTZ
        </NavLink>
      </li>
      <li>
        <NavLink to="/team" className="navlink-list">
          OUR TEAM
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="navlink-list">
          CONTACT US
        </NavLink>
      </li>
    </ul>
  </Col>
);

export default About;
