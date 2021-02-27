import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About';

const CorporateTransparency = () => (
  <div style={{ position: 'relative' }}>
    <img
      src="https://sjeiwebsitemedia.blob.core.windows.net/photos/Window.jpg"
      className="headersub img-responsive  w3-animate-opacity"
      alt="Corporate Transparency"
    />
    <h1 className="headingtxt">Corporate Transparency </h1>
    <div className="container">
      <Row>
        <About />
        <Col md={8} className="container">
          <br />
          {' '}
          <div className="title2">Our Corporate Documents</div>
          <p className="text">
            As a new Non-Profit Organization, we are currently working on
            finalizing all of our corporate documents which include our
            Corporate Bylaws. Below is the latest approved draft of our
            bylaws. They are not complete. We strive for transparency to

            ensure the public&apos;s trust. We have been affirmed by the Internal
            Revenue Service as a 501(c)(3) Non-Profit Organization and
            further, we are classified under 509(a)(2) as a Public Charity.
            All donations are fully deductible under IRS Section 170 and we
            are qualified to receive tax deductible bequests, devises,
            transfers or gifts under Section 2055, 2106, or 2522.
          </p>
          <br />
          <div className="titlenext">Our Founders</div>
          <p className="text">
            Ryan William Bentz, Executive Director The Late William Gordon
            Bentz,
            <br />
            {' '}
            <br />
            Honorary Director Jose Antonio Ayala, Assistant Executive
            Director,
            <br />
            {' '}
            <br />
            Founder Kerrine Bryan, Engineering & Development Director,
            Founder
            <br />
            {' '}
            <br />
          </p>
          <br />
          <div className="titlenext">By laws</div>
          <p className="text">
            <a
              href="https://sjeiwebsitemedia.blob.core.windows.net/photos/Bylaws+of+SJEI+Draft+V6.1.PUB_07FEB2019_PUBLIC_Redacted.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              FEBRUARY 2019 DRAFT BYLAWS V6.1.PUB
            </a>
          </p>
          <br />
          <div className="titlenext">By laws</div>
          <p className="text">
            <a
              href="https://sjeiwebsitemedia.blob.core.windows.net/photos/Articles+of+Incorporation_HIST_PUB_07FEB2019_PUBLIC.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Articles of incorporation
              {' '}
            </a>
          </p>
          <br />
          <div className="titlenext">FINANCIAL STATEMENTS</div>
          <p className="text">
            <a
              href="https://sjeiwebsitemedia.blob.core.windows.net/photos/filing2017.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              2017 Tax Document
            </a>
            <br />
            <a
              href="https://sjeiwebsitemedia.blob.core.windows.net/photos/filing2018.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              2018 Tax Document
            </a>
          </p>
          <br />
        </Col>
      </Row>
    </div>
  </div>
);

export default CorporateTransparency;
