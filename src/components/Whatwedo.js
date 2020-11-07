import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "./About";
import Mailchimp from "react-mailchimp-form";

const Whatwedo = () => (
  <div>
    <img
      src="https://sjeiwebsitemedia.blob.core.windows.net/photos/LIRR.jpg"
      className="headersub img-responsive"
      alt="whatwedo"
    />
    <h1 className="headingtxt">What We Do </h1>
    <div className="container">
      <Row>
        <About />
        <Col md={8} className="container">
          <div>
            <br /> <div className="title2">Our mission</div>
            <p className="text">
              As champions for social and environmental justice, our mission is
              straightforward: to bridge resources with innovation and to
              engineer solutions that target the meaningful involvement of
              people for the common good.
            </p>
            <hr />
            <div className="title2">OUR RESEARCH</div>
            <p className="text">
              We research and validate engineering problems in the lens of
              social and environmental justice. To learn more about our research
              please contact us at research@sjei.org.
            </p>
            <hr />
            <div className="title2">OUR projects</div>
            <div className="titlenext">EDUCATION OUTREACH</div>
            <p className="text">
              We are working to implement a 2 hour lesson plan and activity that
              can be downloaded and used by schools explaining the importance of
              social and environmental justice in engineering to children while
              providing teaching notes and a class activity. We want to make
              this available to a worldwide audience. It will bring awareness to
              what we are working towards. We are seeking volunteers and
              researchers to help with this project. We will seek cooperation
              and alignment with schools, school boards and local authorities to
              ensure that it will complement and enhance existing curriculums
              and gain official recognition as a resource.
            </p>
            <br />
            <div className="titlenext">
              LOW COST HOUSEHOLD GREYWATER SYSTEMS
            </div>
            <p className="text">
              As soon as you think about building a house in Arizona or anywhere
              for that matter, it becomes apparent that water is a major issue.
              Large parts of Phoenix for example are subsiding because humans
              are drawing water from the aquifers underground faster than they
              can be recharged. In fact this is the case in many parts of the
              world.
            </p>
            <br />
            <p className="text">
              One of the easiest, cheapest, and common-sense solutions to this
              issue is to use less clean drinking water for uses that don't
              require it. Since it seems far less likely that the grass, palm
              trees, and gardens will be a thing of the past, we can do this by
              creating LESS black water. Greywater systems use the water that
              comes out of your bathroom sink and shower, and any other used
              water in your household that does not have fecal or food matter.
            </p>{" "}
            <br />
            <p className="text">
              Our goal for this year will be to complete a low cost household
              greywater system, starting out local (Arizona) and expanding after
              proof of concept and design has been completed. By doing so we can
              design and install graywater systems on homes throughout Phoenix
              and the world at a low cost, eliminating upwards of 50% of what
              would otherwise be blackwater and reusing the water outdoors
              instead of using even more clean water outside. We could
              drastically reduce water consumption in the Phoenix area, whilst
              saving people money on their water bills. Further, we could teach
              the builders in the area to build these systems, and maybe provide
              a monetary incentive for a period, to keep the project going. The
              water table could also possibly be recharged by our efforts.
            </p>
            <hr />
            <div className="title2">OUR ADVOCACY</div>
            <p className="text">
              We advocate for stakeholders when engineering projects lead to a
              negative or zero sum outcome. Please contact us for more
              information at advocacy@sjei.org.
            </p>
            <hr />
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "black " }}>SUBSCRIBE</h3>
              <p className="text-center signup">
                Sign up to receive news and updates from us!.
              </p>
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
                  duplicate:
                    "Too many subscribe attempts for this email address",
                  button: "Subscribe!"
                }}
                // Add a personalized class
                className="mailchimpclass"
              />
              <div className="smalltxt">
                We respect your privacy. We won't spam!
              </div>
              {/* mailchimp ends */}
              <br />
              <br />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
export default Whatwedo;
