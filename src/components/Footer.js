import React from 'react';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line import/no-duplicates
import { FaFacebookF } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaTwitter } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaInstagram } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaLinkedinIn } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaMediumM } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Footer = () => (
  <footer className="bg-dark text-white">
    <div>
      <div className="social-media container">
        <Row className="centertext">
          <Row className="text-center mt-4 ">
            <IconContext.Provider value={{ className: 'social-icon' }}>
              <div>
                <a
                  href="https://www.facebook.com/TheSJEI/"
                  target="blank"
                  className="mr-3"
                >
                  <div className="marginicon">
                    {' '}
                    <FaFacebookF />
                  </div>
                  {' '}
                </a>
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ className: 'social-icon' }}>
              <div>
                <a
                  href="https://twitter.com/thesjei"
                  target="blank"
                  className="socialicon"
                >
                  <div className="marginicon">
                    {' '}
                    <FaTwitter />
                  </div>
                  {' '}
                </a>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'social-icon' }}>
              <div>
                <a
                  href="https://www.instagram.com/thesjei/"
                  target="blank"
                  className="mr-3"
                >
                  <div className="marginicon">
                    {' '}
                    <FaInstagram />
                  </div>
                  {' '}
                </a>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'social-icon' }}>
              <div>
                <a
                  href="https://www.linkedin.com/company/sjei/"
                  target="blank"
                  className="socialicon"
                >
                  <div className="marginicon">
                    {' '}
                    <FaLinkedinIn />
                  </div>
                  {' '}
                </a>
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ className: 'social-icon' }}>
              <div>
                <a
                  href="https://medium.com/sjei/the-social-justice-engineering-initiative-is-getting-stronger-c28b648a91ef"
                  target="blank"
                  className="mr-3"
                >
                  <div className="marginicon">
                    {' '}
                    <FaMediumM />
                  </div>
                  {' '}
                </a>
              </div>
            </IconContext.Provider>

          </Row>
        </Row>
      </div>
      <div className="bottom">
        <div className="mt-3">
          <p className="text-center white">
            THE SOCIAL JUSTICE + ENGINEERING INITIATIVE, 2 NORTH CENTRAL AVENUE,
            SUITE 1800, PHOENIX, AZ, 85004
          </p>

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
