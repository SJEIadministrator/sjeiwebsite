import React from 'react';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const About = () => (
  <Col md={4}>
    <ul>
      <li className="about-wedo">ABOUT</li>
      <li>

        <NavLink
          to="/Whatwedo"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          WHAT WE DO
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/corporatetransparency"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          CORPORATE TRANSPARENCY
        </NavLink>

      </li>
      <li>
        <NavLink
          to="/board"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          BOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="volunteer"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          VOLUNTEER
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/William-G-Bentz"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          WILLIAM G BENTZ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/team"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          OUR TEAM
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          exact
          activeClassName="active"
          activeStyle={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          CONTACT US
        </NavLink>
      </li>
    </ul>
  </Col>
);

export default About;
