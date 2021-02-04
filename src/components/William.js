import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const William = () => (
  <div className="container">
    <br />
    {' '}
    <br />
    <Row>
      <About />
      <Col md={8} className="container">
        <div>
          <div className="note">A special note</div>
          <p className="text">
            I started The Social Justice + Engineering Initiative in June of
            2017 to honor my father William "Bill" Gordon Bentz. He later lost
            his incredible battle to incurable cancer and other complications on
            September 9th, 2017.
            <br />
            {' '}
            <br />
            {' '}
            He will never be forgotten. His memory will live on
            through the work of SJEI.
            <br />
            {' '}
            <br />
            {' '}
            My father blindly accepted people for who they are and
            helped those who needed it - unconditionally.
            {' '}
            <br />
            {' '}
            <br />
            His greatest wish was to know that he guided me. I hope that he
            rests in comfort to know that he was the one person in my life who
            had the greatest impact on me.
            {' '}
            <br />
            {' '}
            <br />
            Because of this, I want to be able to do good for the public benefit
            and in his honor.
            <br />
            {' '}
            <br />
            <span style={{ fontStyle: 'italic' }}>I love you dad.</span>
          </p>
        </div>
      </Col>
    </Row>
  </div>
);
export default William;
