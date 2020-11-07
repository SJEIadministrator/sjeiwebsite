import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./About";

const Board = () => (
  <div className="container">
    <br /> <br />
    <Row>
      <About />
      <Col md={8} className="container">
        <div>
          <p className="text">
            <a
              href="https://www.linkedin.com/in/ryanwbentz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ryan William Bentz - CEO, Executive Director & Founder
            </a>
            &nbsp;| Project Engineer, 5x5 Technologies
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/josephayala/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joseph Ayala - Assistant Executive Director, Programming Director
              & Founder
            </a>{" "}
            | T-Mobile
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/unavailable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kerrine Bryan - Engineering & Development Director and Founder
            </a>
            &nbsp; | MEng MBA CEng FIET & Electrical Engineer, WSP USA
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/kortnee-carmack-mpa-06bb373b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kortnee Carmack - Fundraising & Grant Director
            </a>{" "}
            | MPA - Manager, Grants & Planning, Cook Inlet Tribal Council, Inc.
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/unavailable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colleen Casey, P.E. - Engineering & Development Chair
            </a>
            &nbsp;| Founder & CEO, Caseco Engrg Solutions, LLC
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/dagnysignorelli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dagny Signorelli - Environmental Justice Subcommittee Chair
            </a>
            &nbsp; | M.Sc. Forest Ecology and Sustainable Management, Swedish
            University of Agricultural Sciences (2022)
          </p>
          <br />
          <p className="text">
            <a
              href="https://www.linkedin.com/in/cindy-roberts-17ba3176/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cindy Roberts - Social Justice Subcommittee Chair
            </a>
            &nbsp; | HQ PACAF, Force Support Inspections Chief, TS SCI at The
            United States Air Force
          </p>{" "}
          <br />
        </div>
      </Col>
    </Row>
  </div>
);
export default Board;
