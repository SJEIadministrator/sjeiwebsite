import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51INXeFBByxqav24kETmn0vadtyywjflBsxjgsa27HmTFvqdekCSAL6wY0NeTbPSYg7RRYPF8Tq1vdNBfsqoz31q000iTlWR1qJ');

const handleClick = async (event) => {
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{
      price: 'price_1IarJOBByxqav24kK05Tio2m',
      quantity: 1,
    }],
    mode: 'payment',
    successUrl: 'http://localhost:3000/donation-form1',
    cancelUrl: 'http://localhost:3000/donation-form1',
  });
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
};

const DonationForm1 = () => (
  <div className="container">
    <Row className="mt-3">
      <Col>
        <Button variant="info" onClick={handleClick}>$25</Button>
      </Col>
    </Row>
  </div>
)
export default DonationForm1;