import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logoBottom from '../img/guidestart.svg';
import { Link } from 'react-router-dom';

const Donation = () => (
  <div className="container">
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <h4 className="text-center">SUPPORT THE SOCIAL JUSTICE + ENGINEERING INITIATIVE</h4>
        <p>
          All donations are used to support research,
          sustainable development and engineering practices,
          designs, and methods that promote social and environmental
          justice, and operating costs associated with those goals.
          Your donation is fully tax deductible as we are a 501(c)(3) non-profit organization.
          Your support is valued.
        </p>
      </Col>
    </Row>
    <Row className="text-center">
      <Col className="mt-5">
        <Link to="/donation-form1" md={{ span: 3, offset: 5 }}>
          <Button variant="info" className="text-center">
            Donate
          </Button>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="guidelogo1 text-center">
          <a href="https://www.guidestar.org/profile/82-1792979" target="blank">
            <img
              src={logoBottom}
              width="140"
              height="140"
              className="d-inline-block align-top"
              alt="guide-start"
            />
          </a>
        </div>
      </Col>
    </Row>
  </div>
);
export default Donation;