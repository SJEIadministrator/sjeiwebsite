import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// TODO move key to environment variable
const stripePromise = loadStripe('pk_test_51INXeFBByxqav24kETmn0vadtyywjflBsxjgsa27HmTFvqdekCSAL6wY0NeTbPSYg7RRYPF8Tq1vdNBfsqoz31q000iTlWR1qJ');

const pricingDict = {
  10: 'price_1IarJOBByxqav24ku9c0VnJ6',
  25: 'price_1IarJOBByxqav24kK05Tio2m',
  50: 'price_1IarJOBByxqav24kLnNjkBe4',
  100: 'price_1IarJOBByxqav24kB0hqQrrr',
  500: 'price_1IarJOBByxqav24kYjDhsZyY',
  1000: 'price_1IarJOBByxqav24k9WW5rRi4',
  5000: 'price_1IarJOBByxqav24korxaUJJe'
}

const DonationForm1 = () => {
  const [errorMsg, setErrorMsg] = useState('')

  const handleClick = async (price) => {
    const paymentPayload = {
      lineItems: [{
        price: pricingDict[price],
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: `${window.location.origin}/donation-form1`,
      cancelUrl: `${window.location.origin}/donation-form1`
      // TODO add thank you page
    };
  
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    let stripeError;
    try {
      const { error } = await stripe.redirectToCheckout(paymentPayload);
      stripeError = error.message;
    }
    catch(e) {
      stripeError = e.message;
    }
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (stripeError) {
      setErrorMsg(stripeError)
    }
  };

  return (
    <div className="container">
      {!!errorMsg && <Row className="justify-content-md-center text-danger">{errorMsg}</Row> }
      <Row className="justify-content-md-center mb-5">
        SJEI is a 501(c)(3) Non-Profit Organization. 
        All donations are used to support research, sustainable development, 
        engineering practices and designs, and methods that promote social + 
        environmental justice, and operating costs associated with those goals. 
        Our Tax ID is 82-1792979. <br/><br/>
        Please select the desired donation amount in USD.
      </Row>
      <Row className="justify-content-md-center mb-5">
        {Object.keys(pricingDict).map(price => (
          <Col md>
            <Button 
              variant="info" 
              onClick={() => handleClick(price)}>
                ${price}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default DonationForm1;