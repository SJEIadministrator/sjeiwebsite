import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const Board = () => (
  <div className="container">
    <Row>
      <About />
      <Col md={7} className="container">
        <Row className="block">
          <p>
            <a href="https://www.linkedin.com/in/ryanwbentz/" target="blank" className="anchor-t">Ryan William Bentz - CEO, Executive Director & Founder </a>
            | Project Engineer, 5x5 Technologies
          </p>
          <p>
            <a href="https://www.linkedin.com/in/josephayala/" target="blank" className="anchor-t">Joseph Ayala - Assistant Executive Director, Programming Director & Founder </a>
            | T-Mobile
          </p>
          <p>
            <a href="https://www.linkedin.com/in/unavailable/" target="blank" className="anchor-t">Kerrine Bryan - Engineering & Development Director and Founder  </a>
            | MEng MBA CEng FIET &  Electrical Engineer, WSP USA
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kortnee-carmack-mpa-06bb373b/" target="blank" className="anchor-t">Kortnee Carmack - Fundraising & Grant Director </a>
            | MPA - Manager, Grants & Planning, Cook Inlet Tribal Council, Inc.
          </p>
          <p>
            <a href="https://www.linkedin.com/in/ryanwbentz/" target="blank" className="anchor-t">Colleen Casey, P.E. - Engineering & Development Chair </a>
            | Founder & CEO, Caseco Engrg Solutions, LLC
          </p>
          <p>
            <a href="https://www.linkedin.com/in/dagnysignorelli/" target="blank" className="anchor-t">Dagny Signorelli - Environmental Justice Subcommittee Chair </a>
            | M.Sc. Forest Ecology and Sustainable Management, Swedish University of
            Agricultural Sciences (2022)
          </p>
          <p>
            <a href="https://www.linkedin.com/in/cindy-roberts-17ba3176/" target="blank" className="anchor-t">Cindy Roberts - Social Justice Subcommittee Chair </a>
            | HQ PACAF, Force Support Inspections Chief, TS SCI at The United States Air Force
          </p>
        </Row>
      </Col>
    </Row>
  </div>
);
export default Board;
