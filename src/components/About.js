import React from "react";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
      handleone: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick(e) {
    // modify the state, this will automatically recall render() below.
    this.setState(prevState => {
      return { animate: !prevState.animate };
    });
  }
  handleClick1(e) {
    // modify the state, this will automatically recall render() below.
    this.setState(prevState => {
      return { handleone: !prevState.handleone };
    });
    // this.props.history.push("/Whatwedo");
  }
  render() {
    let animationClasses = this.state.animate ? " navlink-listactive" : "";
    let handleoneclasses = this.state.handleone ? " navlink-listactive" : "";

    return (
      <Col md={4}>
        <ul>
          <li className="about-wedo">ABOUT</li>
          <li>
            <NavLink
              to="/Whatwedo"
              onClick={this.handleClick1}
              className={`navlink-list ${handleoneclasses}`}
            >
              WHAT WE DO
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/corporatetransparency"
              onClick={this.handleClick}
              className={`navlink-list ${animationClasses}`}
            >
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
  }
}
