import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Mailchimp from "react-mailchimp-form";
import { Link } from "react-router-dom";
import Slide from "./Slide";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const Home = () => {
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("https://create-stripe-session.azurewebsites.net/api/stripe-checkout-function");
    
    const session = await response.text();
    console.log(session)
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };


  return (
    <div>
    <Slide />
    <div className="container">
      <Row className="marginb">
        <Col>
            <Form.Group as={Col} md={{ span: 3, offset: 5 }}>
              <Button
                type="submit"
                variant="info"
                className=" btn-info text-center "
                onClick={handleClick}
              >
                Donate
              </Button>
            </Form.Group>
          <p className="text-center text-donate first-p mt-2">
            We need diverse individuals with backgrounds in engineering,
            environmental justice, and social justice to volunteer.
          </p>
          <p className="text-center text-donate">
            Help lay the foundation of this organization!
          </p>
          <p className="text-center text-donate last  mt-1">
            Find out more{" "}
            <a
              href="https://www.volunteermatch.org/search/org1044828.jsp"
              target="blank"
              className="anchor-t"
            >
              here.
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 12 }}>
          <h3 className="text-center  mt-2">WHAT WE DO</h3>
          <p className="text-center text-wedo mt-3">
            Our organization seeks to research, develop, and implement
            engineering practices, designs, products, and methods that promote
            social and environmental justice and overall sustainability.
            Further, we strive to educate, advocate, plan and engineer the
            future development of our cities, towns, neighborhoods, farms - our
            planet. We will obtain our goals in a way that is respectful and
            sensitive, and in a manner that treats all inhabitants equally and
            fairly according to the definitions of social justice, environmental
            justice, and the ethical principles adhered to by engineers. Find
            out how you can help.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col></Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div
            style={{
              textAlign: "center"
            }}
          >
            <h3 className="text-center">SUBSCRIBE</h3>
            <span className="text-center signup">
              Sign up to receive news and updates from us!.
            </span>
            {/* <!-- Begin Mailchimp Signup Form --> */}
            <Mailchimp
              action="https://sjei.us2.list-manage.com/subscribe/post?u=21b5cf5568c94d68192141b71&amp;id=9fc47fc227"
              //Adding multiple fields:
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  required: true
                },
                {
                  name: "FNAME",
                  placeholder: "first name",
                  type: "text",
                  required: true
                },
                {
                  name: "LNAME",
                  placeholder: "last name",
                  type: "text",
                  required: true
                }
              ]}
              // Change predetermined language
              messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "Subscribe!"
              }}
              // Add a personalized class
              className="mailchimpclass"
            />
            <div className="smalltxt">
              We respect your privacy. We won't spam!
            </div>
            {/* mailchimp ends */}
          </div>
        </Col>
      </Row>
      <br />
      <Row className="mt-2 ">
        <Col sm={{ span: 12 }} lg={{ span: 4 }} className="pl-3 pr-3">
          <h3>Environmental Justice</h3>
          <ul>
            <li>
              <p className="main-content">
                Environmental justice is the fair treatment and meaningful
                involvement of all people regardless of race, color, national
                origin, or income, with respect to the development,
                implementation, and enforcement of environmental laws,
                regulations, and policies, (EPA).
              </p>
            </li>
            <li>
              <p className="main-content">
                We will take this a step further and include the consideration
                of all inhabitants, including animals.
              </p>
            </li>
          </ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 4 }} className="pl-3 pr-3">
          <h3>Ethical Engineering</h3>
          <ul>
            <li>
              <p className="main-content mt-3">
                Engineers, in the fulfillment of their professional duties,
                shall: Hold paramount the safety, health, and welfare of the
                public.
              </p>
            </li>
            <li>
              <p className="main-content">
                Perform services only in areas of their competence. Issue public
                statements only in an objective and truthful manner.
              </p>
            </li>
            <li>
              <p className="main-content">
                Act for each employer or client as faithful agents or trustees.
                Avoid deceptive acts. Conduct themselves honorably, responsibly,
                ethically, and lawfully so as to enhance the honor, reputation,
                and usefulness of the profession. (I. Fundamental Cannons,
                National Society of Professional Engineers).
              </p>
            </li>
            <li>
              <p className="main-content">
                Each of these cannons completely compliments social and
                environmental justice.{" "}
              </p>
            </li>
            <li>
              <p className="main-content">
                Our initial work will be to compose these three similar
                definitions and subjects into a guiding principles that will
                allow our organization to fulfill our goals and bylaws.
              </p>
            </li>
          </ul>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 4 }} className="pl-3 pr-3">
          <h3>Social Justice</h3>
          <ul>
            <li>
              <p className="main-content">
                The fair and proper administration of laws conforming to the
                natural law that all persons, irrespective of ethnic origin,
                gender, possessions, race, religion, etc., are to be treated
                equally and without prejudice, (Business Directory).
              </p>
            </li>
            <li>
              <p className="main-content">
                Further, social justice is the virtue which guides us in
                creating those organized human interactions we call
                institutions.
              </p>
            </li>
            <li>
              <p className="main-content">
                In turn, social institutions, when justly organized, provide us
                with access to what is good for the person, both individually
                and in our associations with others.
              </p>
            </li>
            <li>
              <p className="main-content">
                Social justice also imposes on each of us a personal
                responsibility to work with others, at whatever level of the
                “Common Good” in which we participate, to design and continually
                perfect our institutions as tools for personal and social
                development, (Center for Economic and Social Justice).
              </p>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5 mb-8">
        <Col lg={{ span: 4, offset: 2 }}>
          <Link to="/Whatwedo" className="blacklink">
            <img
              className="d-block w-100 photo-at"
              src="https://sjeiwebsitemedia.blob.core.windows.net/photos/Library.jpg"
              alt="about"
            />
            <h4 className="text-center mt-3">ABOUT</h4>
          </Link>
          <p className="text-center">
            Find out about our organization, mission, our methods, and our
            advocacy.
          </p>
        </Col>
        <Col lg={4}>
          <Link to="/take-action" className="blacklink">
            <img
              className="d-block w-100 photo-at"
              src="https://sjeiwebsitemedia.blob.core.windows.net/photos/Staircase.jpg"
              alt="take-action"
            />{" "}
            <h4 className="text-center mt-3">TAKE ACTION</h4>
          </Link>

          <p className="text-center">
            Ready to take the next step? You can become a contributor to our
            cause, or participate yourself.
          </p>
        </Col>
      </Row>
    </div>
  </div>
);


}
  
export default Home;
