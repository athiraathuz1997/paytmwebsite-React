import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import arrowicon from "../images/arrowicon.png";
import clockicon from "../images/clock icon.png";
import lapicon from "../images/lapicon.png";
import Group from "../images/Group 48.png";

const About = () => {
    return (
        <div>
      <div className="sectionbg">
        <Container>
          <Row>
            <Col md={12}>
              <div className="first-section">
                <h2 className="text-center pt-4">About Our App</h2>
                <p className="d-flex justify-content-center text-center blur-color">
                  Do you want to have your own HR management software system? If
                  YES, you have landed at the best place. Paytym offers extensive HR
                  management software development services for startups and enterprises
                  irrespective of the industry type.
                </p>
              </div>
              <div>
                <h3 className="sect-head pt-4">User Friendly Interfaces</h3>
                <p>Lorem Ipsum is simply dummy text of the printing us. disciplined rid so rational muff the project.</p>
                <Container>
                  <Row className="d-flex align-items-center">
                    <Col xl={6}>
                      <Row>
                        <Col sm={6} md={6} lg={6} mb={3} mb-md-0>
                          <div className="d-flex justify-content-center">
                            <div>
                              <div className="circle bg-success">
                                <img src={arrowicon} alt="" className="img-fluid icon-img" />
                              </div>
                            </div>
                            <div className="sub-sent">
                              <h6>Elegant Interface</h6>
                              <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} mb={3} mb-md-0>
                          <div className="d-flex justify-content-center">
                            <div>
                              <div className="circle bg-warning">
                                <img src={arrowicon} alt="" className="img-fluid icon-img" />
                              </div>
                            </div>
                            <div className="sub-sent">
                              <h6>Elegant Interface</h6>
                              <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6} md={6} lg={6} mb={3} mb-md-0>
                          <div className="d-flex justify-content-center">
                            <div>
                              <div className="circle bg-primary">
                                <img src={clockicon} alt="" className="img-fluid icon-img" />
                              </div>
                            </div>
                            <div className="sub-sent">
                              <h6>Elegant Interface</h6>
                              <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                            </div>
                          </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} mb={3} mb-md-0>
                          <div className="d-flex justify-content-center">
                            <div>
                              <div className="circle bg-info">
                                <img src={lapicon} alt="" className="img-fluid icon-img" />
                              </div>
                            </div>
                            <div className="sub-sent">
                              <h6>Elegant Interface</h6>
                              <p>Lorem Ipsum is simply dummy text of the printing us.</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={6}>
                      <img src={Group} className="img-fluid" alt="Group" />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About