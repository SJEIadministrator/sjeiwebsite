import React, { Component } from "react";
import About from "./About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CorporateTransparency extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <About />
          <Col md={8} className="container">
            <div className="title2">Our Corporate Documents</div>
            <p className="text">
              As a new Non-Profit Organization, we are currently working on
              finalizing all of our corporate documents which include our
              Corporate Bylaws. Below is the latest approved draft of our
              bylaws. They are not complete. We strive for transparency to
              ensure the public's trust. We have been affirmed by the Internal
              Revenue Service as a 501(c)(3) Non-Profit Organization and
              further, we are classified under 509(a)(2) as a Public Charity.
              All donations are fully deductible under IRS Section 170 and we
              are qualified to receive tax deductible bequests, devises,
              transfers or gifts under Section 2055, 2106, or 2522.
            </p>
            <br />
            <div className="titlenext">Our FOunders</div>
            <p className="text">
              Ryan William Bentz, Executive Director The Late William Gordon
              Bentz,
              <br /> <br />
              Honorary Director Jose Antonio Ayala, Assistant Executive
              Director,
              <br /> <br />
              Founder Kerrine Bryan, Engineering & Development Director, Founder
              <br /> <br />
            </p>
            <br />
            <div className="titlenext">By laws</div>
            <p className="text">
              <a
                href="https://static1.squarespace.com/static/5938c91cbe65945cac32a872/t/5c5d036d4785d33a4f14f447/1549599598516/Bylaws+of+SJEI+Draft+V6.1.PUB_07FEB2019_PUBLIC_Redacted.pdf"
                target="_blank"
              >
                FEBRUARY 2019 DRAFT BYLAWS V6.1.PUB
              </a>
            </p>
            <br />
            <div className="titlenext">By laws</div>
            <p className="text">
              <a
                href="https://static1.squarespace.com/static/5938c91cbe65945cac32a872/t/5c5d0b5153450a33cdf728b4/1549601618709/Articles+of+Incorporation_HIST_PUB_07FEB2019_PUBLIC.pdf"
                target="_blank"
              >
                Articles of incorporation{" "}
              </a>
              <br />
              <a
                href="https://ecorp.azcc.gov/EntitySearch/Index"
                target="_blank"
              >
                State of Arizona Corporation COmmission
              </a>
            </p>
            <br />
            <div className="titlenext">FINANCIAL STATEMENTS</div>
            <p className="text">
              <a
                href="https://static1.squarespace.com/static/5938c91cbe65945cac32a872/t/5c5cfc594785d3eceb63ab99/1549597785204/%27filing.pdf%27.pdf"
                target="_blank"
              >
                Articles of incorporation{" "}
              </a>
              <br />
              <a
                href="https://static1.squarespace.com/static/5938c91cbe65945cac32a872/t/5c5cfc9ceef1a1750a20ea59/1549597852950/%27filing.pdf%27-1.pdf"
                target="_blank"
              >
                2018 990N Tax Document
              </a>
            </p>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}
