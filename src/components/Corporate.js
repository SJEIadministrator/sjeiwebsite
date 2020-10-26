import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const Corporate = () => (
  <div className="container">
    <Row>
      <About />
      <Col md={7} className="container">
        <Row className="block">
          <Col>
            <h5>Our Corporate Documents</h5>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
export default Corporate;
