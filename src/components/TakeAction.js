import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TakeAction = () => (
  <div style={{ position: "relative" }}>
    <img
      src="https://sjeiwebsitemedia.blob.core.windows.net/photos/UnderBridge.jpg"
      className="headersub img-responsive w3-animate-opacity"
      alt="whatwedo"
    />
    <h1 className="headingtxt">TAKE ACTION</h1>
    <div className="container">
      <Row>
        <Col md={{ span: 10, offset: 1 }} className="mb-5">
          <p className="youcanmake text-center">
            You can make a difference. Our work will help ensure future
            development limits or eliminates negative impacts on our environment
            and fellow human.
          </p>
        </Col>
      </Row>
      <Row className="coltakeaction">
        <Col>
          <h5 className="text-center title-h5">SUPPORT</h5>
          <p className="text-center">
            Your donation allows us to perform research, ensure sustainable
            engineering practices and methods are being performed while ensuring
            social and environmental justice. Help us get off the ground!
          </p>
          <p className="text-center">
            <a
              className="anchor-t"
              href="https://secure.squarespace.com/checkout/donate?donatePageId=5939bc3c6b8f5b104ec81d05&ss_cid=fdc436da-1cc7-4cb0-aed5-3a5742cfec1f&ss_cvisit=1596857972140&ss_cvr=9d5e9807-f2ec-48d4-971c-e23d41f91dd9%7C1596832794660%7C1596848334690%7C1596857972833%7C3"
            >
              Make a donation
            </a>
          </p>
        </Col>
        <br />
        <Col>
          <h5 className="text-center title-h5">VOLUNTEER</h5>
          <p className="text-center">
            Tell your friends and family. There&apos;s no better way to make an
            impact than to become informed yourself. Join now and make an
            impact!
          </p>
          <div className="text-center">
            <br />
            <p>
              {" "}
              <a href="/volunteer" className=" anchor-t">
                Join the Initiative
              </a>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="amazon-charity-banner">
          <a
            href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=82-1792979&ref_=smi_ext_ch_82-1792979_cl"
            target="blank"
            className="anchor-t"
          >
            <p className="support1">Support</p>
            <p className="charity-name1">The Social Justice +</p>
            <p className="charity-name2">Engineering Initiative.</p>
            <p className="whenyou">
              When you shop at
              <b> smile.amazon.com,</b>
            </p>
            <p className="amazon">Amazon donates</p>
          </a>
        </Col>
      </Row>
    </div>
  </div>
);
export default TakeAction;
