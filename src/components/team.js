import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "../index";
import SimpleCard from "./card";
import About from "./About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Administration from "./administrationvol";
import FundraisingGrant from "./fundraisinggrant";
import ProjectsVolunteer from "./projectsvolunteer";
import CommunicationMarketingVol from "./communicationmarketingvol";
import InformationTechnologyVol from "./infirmationtechnologyvol";

export default class Team extends Component {
  render() {
    return (
      <div className="container">
        <br /> <br />
        <Row>
          <About />
          <Col md={8} sm={12} className="container">
            <div>
              <div className="title2">Our team</div>

              <Tabs forceRenderTabPanel={true}>
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
                    </div>{" "}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="carddetail">
                    {" "}
                    <Administration />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="carddetail">
                    {" "}
                    <FundraisingGrant />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="carddetail">
                    {" "}
                    <ProjectsVolunteer />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="carddetail">
                    {" "}
                    <CommunicationMarketingVol />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="carddetail">
                    {" "}
                    <InformationTechnologyVol />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
