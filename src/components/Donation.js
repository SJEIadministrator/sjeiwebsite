import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Donation = () => (
  <div className="container">
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <h4 className="text-center">
          SUPPORT THE SOCIAL JUSTICE + ENGINEERING INITIATIVE
        </h4>
        <p>
          All donations are used to support research, sustainable development
          and engineering practices, designs, and methods that promote social
          and environmental justice, and operating costs associated with those
          goals. Your donation is fully tax deductible as we are a 501(c)(3)
          non-profit organization. Your support is valued.
        </p>
      </Col>
    </Row>
    <Row>
      <Col className="mt-5">
        <a
          href="https://secure.squarespace.com/checkout/donate?donatePageId=5939bc3c6b8f5b104ec81d05&ss_cid=2ea6d8f1-68d4-4e98-bb79-41a3aa154623&ss_cvisit=1603147929481&ss_cvr=70c8a24a-78b2-412a-9e20-ded2c0bc7d21%7C1602109525332%7C1603131768961%7C1603147929308%7C24"
          target="blank"
        >
          <Form.Group as={Col} md={{ span: 3, offset: 5 }}>
            <Button type="submit" variant="info" className="signup text-center">
              Donate
            </Button>
          </Form.Group>
        </a>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="guidelogo1 text-center">
          <a href="https://www.guidestar.org/profile/82-1792979" target="blank">
            <img
              src="https://sjeiwebsitemedia.blob.core.windows.net/photos/DigitalRGB_Platinum_135px.svg"
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
