import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SimpleCard from './card';
import About from './About';

const Team = () => (
  <div className="container">
    <br />
    {' '}
    <br />
    <Row>
      <About />
      <br />
      <br />
      <br />
      <Col md={8} sm={12} xs={12} lg={8} className="container">
        <div>
          <div className="title2">Our team</div>

          <div className="col">
            <div className="carddetail">
              <SimpleCard />
            </div>
          </div>

        </div>
      </Col>
    </Row>
  </div>
);

export default Team;
