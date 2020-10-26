import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const Whatwedo = () => (
  <div className="container">
    <Row>
      <About />
      <Col md={7} className="container">
        <Row className="block">
          <h5>OUR MISSION</h5>
          <p>
            As champions for social and environmental justice, our mission
            is straightforward:  to bridge resources with innovation and to
            engineer solutions that target the meaningful involvement of people
            for the common good.
          </p>
        </Row>
        <Row className="block">
          <h5>OUR RESEARCH</h5>
          <p>
            We research and validate engineering problems in the lens of social
            and environmental justice. To learn more about our research please contact
            us at research@sjei.org.
          </p>
        </Row>
        <Row className="block">
          <h5>OUR PROJECTS</h5>
          <div>
            <h6>EDUCATION OUTREACH</h6>
            <p>
              We are working to implement a 2 hour lesson plan and activity
              that can be downloaded and used by schools explaining the importance
              of social and environmental justice in engineering to children while
              providing teaching notes and a class activity. We want to make this available
              to a worldwide audience. It will bring awareness to what we are working towards.
              We are seeking volunteers and researchers to help with this project.
              We will seek cooperation and alignment with schools, school boards and local
              authorities to ensure that it will complement and enhance existing curriculums and
              gain official recognition as a resource.
            </p>
            <h6>LOW COST HOUSEHOLD GREYWATER SYSTEMS</h6>
            <p>
              As soon as you think about building a house in Arizona or
              anywhere for that matter, it becomes apparent that water is
              a major issue. Large parts of Phoenix for example are subsiding
              because humans are drawing water from the aquifers underground
              faster than they can be recharged. In fact this is the case in
              many parts of the world.

              One of the easiest, cheapest, and common-sense solutions to this issue
              is to use less clean drinking water for uses that don&apos;t require it.
              Since it seems far less likely that the grass, palm trees, and gardens
              will be a thing of the past, we can do this by creating LESS black water.
              Greywater systems use the water that comes out of your bathroom sink and shower,
              and any other used water in your household that does not have fecal or food matter.

              Our goal for this year will be to complete a low cost household greywater system,
              starting out local (Arizona) and expanding after proof of concept and design has
              been completed. By doing so we can design and install graywater systems on homes
              throughout Phoenix and the world at a low cost, eliminating upwards of 50% of what
              would otherwise be blackwater and reusing the water outdoors instead of using even
              more clean water outside. We could drastically reduce water consumption in the Phoenix
              area, whilst saving people money on their water bills. Further, we could teach the
              builders in the area to build these systems, and maybe provide a monetary incentive
              for a period, to keep the project going. The water table could also possibly be
              recharged by our efforts.
            </p>
          </div>
        </Row>
        <Row className="block">
          <h5>OUR ADVOCACY</h5>
          <p>
            We advocate for stakeholders when engineering projects lead to a negative
            or zero sum outcome. Please contact us for more information at advocacy@sjei.org.
          </p>
        </Row>
        <Row className="block">
          <h5>SUBSCRIBE</h5>
        </Row>
      </Col>
    </Row>
  </div>
);
export default Whatwedo;
