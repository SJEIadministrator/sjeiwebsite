import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PressRelease = () => (
  <div className="container">
    <Row>
      <Col md={{ span: 10, offset: 1 }} className="mb-5">
        <br />{" "}
        <p className=" text-center">
          <h2>Support For The Clean Power Program: CPP</h2>
        </p>
      </Col>
    </Row>
    <Row className="coltakeaction">
      <Col>
        <p className="text-center">
          <img
            className="imgpress"
            src=" https://sjeiwebsitemedia.blob.core.windows.net/photos/GuardianPicture1.jpg"
          />
          <h6>Source:The guardian</h6>
        </p>
      </Col>
      <br />
      <Col>
        <p className="text-center">
          <img
            className="imgpress"
            src="https://sjeiwebsitemedia.blob.core.windows.net/photos/GuardianPicture2.jpg"
          />
          <h6>Source:The guardian</h6>
        </p>
        <div className="text-center">
          <br />
          <p></p>
        </div>
      </Col>
    </Row>
  </div>
);
export default PressRelease;
