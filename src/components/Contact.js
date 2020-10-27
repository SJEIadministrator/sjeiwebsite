import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./About";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { Form } from "semantic-ui-react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <Row>
        <About />
        <Col md={7} className="container">
          <Col>
            <div id="App">
              <div className="title2 mt-8">Subscribe, call, mail </div>
              <div className={classes.root} className="container">
                <div>
                  <Form id="contact-form">
                    <TextField
                      id="filled-full-width"
                      label=" Name*"
                      margin="normal"
                      style={{ marginBottom: 8, marginRight: 8, width: "100%" }}
                      variant="outlined"
                      size="small"
                      helperText="First Name"
                    />
                    <TextField
                      id="filled-full-width"
                      label="Last Name"
                      margin="normal"
                      style={{ marginBottom: 0, width: "100%" }}
                      variant="outlined"
                      size="small"
                      helperText="Last Name"
                    />
                    <TextField
                      id="filled-full-width"
                      label="Email Address*"
                      fullWidth
                      margin="normal"
                      style={{ marginBottom: 0 }}
                      variant="outlined"
                      size="small"
                      helperText="Email"
                    />
                    <TextField
                      id="filled-full-width"
                      label="Subject*"
                      margin="normal"
                      fullWidth
                      style={{ marginBottom: 12 }}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-textarea"
                      label="Message*"
                      fullWidth
                      style={{ marginBottom: 8 }}
                      placeholder="Message"
                      multiline
                      variant="outlined"
                    />
                    <br />
                    <small>Subcribe to email list? (We dont spam)!</small>
                    <div>
                      <Checkbox />
                      <span className="smalltxt">
                        Yes, I want to stay up to date
                      </span>
                    </div>
                    <Button type="submit" className="submit">
                      SUBMIT
                    </Button>
                  </Form>
                </div>
              </div>
              <h1 className="mt-5">Locations</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0291688694274!2d-112.07634498480076!3d33.44854658077444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12219c9afd0d%3A0x4e4c51571742bee6!2s2%20N%20Central%20Ave%20%231800%2C%20Phoenix%2C%20AZ%2085004!5e0!3m2!1sen!2sus!4v1602442945223!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className="img-responsive"
              ></iframe>
              <div className="email-contact">
                HQ <br />
                2 NORTH CENTRAL AVENUE, SUITE 1800, PHOENIX, ARIZONA 85004
                <br />
                <br />
                BY APPOINTMENT ONLY
                <br />
                CALL: 602.935.4926
              </div>
              <div className="verticalgap"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.043917893987!2d-111.88508428459356!3d40.76105877932667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f513121a420b%3A0x9b25ba1d2d99d06a!2s370%20S%20300%20E%2C%20Salt%20Lake%20City%2C%20UT%2084111!5e0!3m2!1sen!2sus!4v1602443304109!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className="img-responsive"
              ></iframe>
              <div className="email-contact">
                SATELLITE OFFICE <br />
                SALT LAKE CITY, UTAH 84111
                <br />
                <br />
                BY APPOINTMENT ONLY
                <br />
                CALL: 385.630.0555
              </div>
              <div className="verticalgap"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24152.173726845776!2d-73.97031564064625!3d40.82748667643108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6615760cf73%3A0x764bebf6466683e!2sNew%20York%2C%20NY%2010031!5e0!3m2!1sen!2sus!4v1602455487718!5m2!1sen!2sus"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className="img-responsive"
              ></iframe>
              <div className="email-contact">
                SATELLITE OFFICE
                <br /> NEW YORK, NEW YORK 10031
                <br />
                <br /> BY APPOINTMENT ONLY
                <br /> CALL: 385.630.0555
              </div>
              <div className="verticalgap"></div>

              <div className="title2">Email</div>
              <div className="titlenext">
                GENERAL INQUIRIES & PARTNERSHIPS
                <br />
                <br />
                <span className="nobold">
                  <b>Ryan Bentz</b> - Executive Director | Projects Director |
                  Founder | Executive Chair
                  <br />
                  Email:{" "}
                  <a href="mailto:ryan.bentz@sjei.org" target="_blank">
                    ryan.bentz@sjei.org
                  </a>{" "}
                  | Phone: 856.405.1895
                </span>
                <br /> <br />
                <span className="nobold">
                  <b>Kerrine Bryan</b>, Chartered Electrical Engineer - Director
                  of Engineering & Development
                  <br />
                  Email:{" "}
                  <a href="mailto:kerrine.bryan@sjei.org" target="_blank">
                    kerrine.bryan@sjei.org
                  </a>{" "}
                  | Phone: 385.630.0555{" "}
                </span>
              </div>
              <br />
              <div className="titlenext">
                SOCIAL JUSTICE INQUIRIES & PARTNERSHIPS
                <br />
                <br />
                <span className="nobold">
                  <b>Joseph Ayala</b> - Assistant Executive Director |
                  Programming Director | Founder
                  <br />
                  Email:{" "}
                  <a href="mailto:joseph.ayala@sjei.org" target="_blank">
                    joseph.ayala@sjei.org{" "}
                  </a>{" "}
                  | Phone: 609.357.8925
                </span>
              </div>
            </div>{" "}
          </Col>{" "}
        </Col>
      </Row>
    </div>
  );
};
export default Contact;
