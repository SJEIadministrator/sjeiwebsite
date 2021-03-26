import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DonationForm1 = () => (
  <div className="container">
    <Row className="mt-3">
      <Col>
      <Form>
        <Form.Row>
        <Form.Group as={Col} md={{ span: 2.5, offset: 2 }}>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group as={Col} md="2.6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group as={Col} md="2.6" controlId="validationCustom01">
          <Form.Control
            required
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Button type="submit" variant="info" className="signup">SIGN UP</Button>
        </Form.Group>
        </Form.Row>
      </Form>
      </Col>
    </Row>
  </div>
)
export default DonationForm1;