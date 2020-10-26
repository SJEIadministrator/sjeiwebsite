import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const William = () => (
  <div className="container">
    <Row>
      <About />
      <Col md={7} className="container">
        <Row className="block">
          <h5 className="special-note-title">A special note</h5>
          <p>
            I started The Social Justice + Engineering Initiative in June of 2017
            to honor my father William &quot;Bill&quot; Gordon Bentz. He later lost his incredible
            battle to incurable cancer and other complications on September 9th, 2017.
          </p>
          <p>He will never be forgotten. His memory will live on through the work of SJEI. </p>
          <p>
            My father blindly accepted people for who they are and helped those who needed it
            - unconditionally.
          </p>
          <p>
            His greatest wish was to know that he guided me. I hope that he rests in comfort
            to know that he was the one person in my life who had the greatest impact on me.
          </p>
          <p>
            Because of this, I want to be able to do good for the public benefit and in his
            honor.
          </p>
          <p>I love you dad. </p>
        </Row>
      </Col>
    </Row>
  </div>
);
export default William;
