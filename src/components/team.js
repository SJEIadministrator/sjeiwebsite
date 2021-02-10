import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import Tabs from './Tabs';
import SimpleCard from './card';
import About from './About';
import Administration from './administrationvol';
import FundraisingGrant from './fundraisinggrant';
import ProjectsVolunteer from './projectsvolunteer';
import CommunicationMarketingVol from './communicationmarketingvol';
import InformationTechnologyVol from './infirmationtechnologyvol';

const Team = () => (
  <div className="container">
    <br />
    {' '}
    <br />
    <Row>
      <About />
      <Col md={8} sm={12} className="container">
        <div>
          <div className="title2">Our team</div>

          <Tabs forceRenderTabPanel>
            <TabList md={8} sm={12}>
              <Tab>General volunteers</Tab>
              <Tab>Administration</Tab>
              <Tab>Fundraising & Grants</Tab>
              <Tab>Projects</Tab>
              <Tab>Communication & Marketing</Tab>
              <Tab>Information Technology/ Legal</Tab>
            </TabList>

            <TabPanel>
              <div>
                <div className="carddetail">
                  <SimpleCard />
                </div>
                {' '}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="carddetail">
                {' '}
                <Administration />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="carddetail">
                {' '}
                <FundraisingGrant />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="carddetail">
                {' '}
                <ProjectsVolunteer />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="carddetail">
                {' '}
                <CommunicationMarketingVol />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="carddetail">
                {' '}
                <InformationTechnologyVol />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
);

export default Team;
