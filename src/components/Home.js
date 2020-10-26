import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import about from '../img/stanislav-kondratiev-6pO3QFkk7hQ-unsplash.jpg';
import action from '../img/jakob-owens-CiUR8zISX60-unsplash.jpg';

const Home = () => (
  <div className="container">
    <Row>
      <Col>
        <a href="https://secure.squarespace.com/checkout/donate?donatePageId=5939bc3c6b8f5b104ec81d05&ss_cid=2ea6d8f1-68d4-4e98-bb79-41a3aa154623&ss_cvisit=1603147929481&ss_cvr=70c8a24a-78b2-412a-9e20-ded2c0bc7d21%7C1602109525332%7C1603131768961%7C1603147929308%7C24" target="blank">
          <Form.Group as={Col} md={{ span: 3, offset: 5 }}>
            <Button type="submit" variant="info" className="signup text-center">Donate</Button>
          </Form.Group>
        </a>
        <p className="text-center text-donate first-p mt-5">We need diverse individuals with backgrounds in engineering, environmental justice, and social justice to volunteer.</p>
        <p className="text-center text-donate">Help lay the foundation of this organization!</p>
        <p className="text-center text-donate last mb-4">
          Find out more
          {' '}
          <a href="https://www.volunteermatch.org/search/org1044828.jsp" target="blank" className="anchor-t">here.</a>
        </p>
      </Col>
    </Row>
    <Row>
      <Col lg={{ span: 8, offset: 2 }}>
        <h3 className="text-center">WHAT WE DO</h3>
        <p className="text-center text-wedo mt-3">
          Our organization seeks to research, develop,
          and implement engineering practices, designs, products,
          and methods that promote social and environmental justice
          and overall sustainability. Further, we strive to educate,
          advocate, plan and engineer the future development of our cities,
          towns, neighborhoods, farms - our planet. We will obtain our goals
          in a way that is respectful and sensitive, and in a manner that treats
          all inhabitants equally and fairly according to the definitions of social justice,
          environmental justice, and the ethical principles adhered to by engineers.
          Find out how you can help.
        </p>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col>
        <h3 className="text-center">SUBSCRIBE</h3>
        <p className="text-center">Sign up to receive news and updates from us!.</p>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 2.5, offset: 2 }} controlId="validationCustom01">
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
    <Row className="mt-5">
      <Col>
        <h3>Environmental Justice</h3>
        <ul>
          <li>
            <p>
              Environmental justice is the fair treatment and meaningful
              involvement of all people regardless of race, color, national origin,
              or income, with respect to the development, implementation,
              and enforcement of environmental laws, regulations, and policies, (EPA).
            </p>
          </li>
          <li>
            <p>
              We will take this a step further and include the consideration
              of all inhabitants, including animals.
            </p>
          </li>
        </ul>
      </Col>
      <Col>
        <h3>Ethical Engineering</h3>
        <ul>
          <li>
            <p>
              Engineers, in the fulfillment of their professional duties,
              shall: Hold paramount the safety, health, and welfare of the public.
            </p>
          </li>
          <li>
            <p>
              Perform services only in areas of their competence.
              Issue public statements only in an objective and truthful manner.
            </p>
          </li>
          <li>
            <p>
              Act for each employer or client as faithful agents or trustees.
              Avoid deceptive acts. Conduct themselves honorably, responsibly,
              ethically, and lawfully so as to enhance the honor, reputation,
              and usefulness of the profession. (I. Fundamental Cannons, National
              Society of Professional Engineers).
            </p>
          </li>
          <li>
            <p>Each of these cannons completely compliments social and environmental justice. </p>
          </li>
          <li>
            <p>
              Our initial work will be to compose these three similar definitions
              and subjects into a guiding principles that will allow our
              organization to fulfill our goals and bylaws.
            </p>
          </li>
        </ul>
      </Col>
      <Col>
        <h3>Social Justice</h3>
        <ul>
          <li>
            <p>
              The fair and proper administration of laws conforming
              to the natural law that all persons, irrespective of ethnic origin,
              gender, possessions, race, religion, etc., are to be treated equally
              and without prejudice, (Business Directory).
            </p>
          </li>
          <li>
            <p>
              Further, social justice is the virtue which guides us
              in creating those organized human interactions we call institutions.
            </p>
          </li>
          <li>
            <p>
              In turn, social institutions, when justly organized, provide
              us with access to what is good for the person, both individually
              and in our associations with others.
            </p>
          </li>
          <li>
            <p>
              Social justice also imposes on each of us a personal responsibility
              to work with others, at whatever level of the “Common Good” in which
              we participate, to design and continually perfect our institutions as
              tools for personal and social development, (Center for Economic and Social Justice).
            </p>
          </li>
        </ul>
      </Col>
    </Row>
    <Row className="mt-5 mb-5">
      <Col lg={{ span: 4, offset: 2 }}>
        <img
          className="d-block w-100 photo-at"
          src={about}
          alt="about"
        />
        <h4 className="text-center mt-3">ABOUT</h4>
        <p className="text-center">Find out about our organization, mission, our methods, and our advocacy.</p>
      </Col>
      <Col lg={4}>
        <img
          className="d-block w-100 photo-at"
          src={action}
          alt="take-action"
        />
        <h4 className="text-center mt-3">TAKE ACTION</h4>
        <p className="text-center">Ready to take the next step? You can become a contributor to our cause, or participate yourself.</p>
      </Col>
    </Row>
  </div>
);
export default Home;
