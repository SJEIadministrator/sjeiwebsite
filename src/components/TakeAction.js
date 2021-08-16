import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const TakeAction = () => (
  <div className="container">
    <Row>
      <Col md={{ span: 10, offset: 1 }} className="mb-5">
        <p className="youcanmake text-center">
          You can make a difference. Our work will help ensure future development
          limits or eliminates negative impacts on our environment and fellow human.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5 className="text-center title-h5">SUPPORT</h5>
        <p className="text-center">
          Your donation allows us to perform research, ensure sustainable
          engineering practices and methods are being performed while ensuring
          social and environmental justice. Help us get off the ground!
        </p>
        <p className="text-center">
          <NavLink to="/donation-form1" className="mr-4 anchor-t">Make a donation</NavLink>
        </p>
      </Col>
      <Col>
        <h5 className="text-center title-h5">VOLUNTEER</h5>
        <p className="text-center">
          Tell your friends and family. There&apos;s no better way to
          make an impact than to become informed yourself. Join now and make an impact!
        </p>
        <div className="text-center">
          <NavLink to="/volunteer" className="mr-4 anchor-t">Join the Initiative</NavLink>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className="amazon-charity-banner">
        <a href="https://smile.amazon.com/gp/chpf/homepage/ref=smi_chpf_redirect?ie=UTF8&ein=82-1792979&ref_=smi_ext_ch_82-1792979_cl" target="blank" className="anchor-t">
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
);
export default TakeAction;
