import React from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <footer className="bg-dark text-white">
    <div>
      <div className="social-media container">
        <Row>
          <Col className="text-center mt-4">
            <a
              href="https://www.facebook.com/TheSJEI/"
              target="blank"
              className="mr-3"
            >
              <SocialIcon
                network="facebook"
                bgColor="white"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="https://twitter.com/thesjei"
              target="blank"
              className="mr-3"
            >
              <SocialIcon
                network="twitter"
                bgColor="white"
                className="icons"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="https://www.instagram.com/thesjei/"
              target="blank"
              className="mr-3"
            >
              <SocialIcon
                network="instagram"
                bgColor="white"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/sjei/"
              target="blank"
              className="mr-3"
            >
              <SocialIcon
                network="linkedin"
                bgColor="white"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <a
              href="https://medium.com/the-social-justice-engineering-initiative"
              target="blank"
              className="mr-3"
            >
              <SocialIcon
                network="medium"
                bgColor="white"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <div className="mt-3">
          <p className="text-center white">
            THE SOCIAL JUSTICE + ENGINEERING INITIATIVE, 2 NORTH CENTRAL AVENUE,
            SUITE 1800, PHOENIX, AZ, 85004,
          </p>
          <p className="text-center white">ITE 1800, PHOENIX, AZ, 85004,</p>

          <p className="text-center gray">
            The Social Justice + Engineering Initiative is a 501 (c)(3)
            non-profit organization.
          </p>
          <div className="guidelogo text-center">
            <a
              href="https://www.guidestar.org/profile/82-1792979"
              target="blank"
            >
              <img
                src="https://sjeiwebsitemedia.blob.core.windows.net/photos/DigitalRGB_Platinum_135px.svg"
                className="d-inline-block align-top responsiveimg"
                alt="guide-start"
              />
            </a>
          </div>
          <p className="text-center gray">Powered by AstroCivEng</p>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
