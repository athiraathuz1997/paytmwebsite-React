import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
const Pricing = () => {
    return (
        <div className="section-container">
        <Container>
          <Row>
            <h2 className="sect-head text-center pt-4 mt-5">Best Pricing Plan</h2>
            <p className="text-center blur-color">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              at its layout.
            </p>
          </Row>
          <Row className="mt-4 d-flex justify-content-around">
            <Col md={4}>
              <Card className="mb-5 card-bodystyle">
                <Card.Body>
                  <h5 className="card-title text-center mt-3">Standard</h5>
                  <Container>
                    <div className="dashed mt-3"></div>
                    <h3 className="mt-2 mb-2 text-center">$33/monthly</h3>
                    <div className="dashed mt-3"></div>
                  </Container>
                  <Container>
                    <p className="mt-5 mb-0">
                      Extra features
                      <ul>
                        <li>Lifetime free support</li>
                        <li>Upgrade options</li>
                        <li>Full access</li>
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Web Development</li>
                      </ul>
                    </p>
                  </Container>
                  <div className="text-center mt-5">
                    <button className="button rounded-corners button-Modify personal-box">Get Started</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-5 card-bodyposter">
                <Card.Body>
                  <h5 className="card-title text-center mt-3">Personal</h5>
                  <Container>
                    <div className="dashed-red mt-3"></div>
                    <h3 className="mt-2 mb-2 text-center">$69/monthly</h3>
                    <div className="dashed-red mt-3"></div>
                  </Container>
                  <Container>
                    <p className="mt-5 mb-0">
                      Extra features
                      <ul>
                        <li>Lifetime free support</li>
                        <li>Upgrade options</li>
                        <li>Full access</li>
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Web Development</li>
                      </ul>
                    </p>
                  </Container>
                  <div className="text-center mt-5">
                    <button className="button rounded-corners button-Modify pricing-color">Get Started</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-5 card-bodymodal">
                <Card.Body>
                  <h5 className="card-title text-center mt-3">Business</h5>
                  <Container>
                    <div className="dashed-modal mt-3"></div>
                    <h3 className="mt-2 mb-2 text-center">$99/monthly</h3>
                    <div className="dashed-modal mt-3"></div>
                  </Container>
                  <Container>
                    <p className="mt-5 mb-0">
                      Extra features
                      <ul>
                        <li>Lifetime free support</li>
                        <li>Upgrade options</li>
                        <li>Full access</li>
                        <li>Web Design</li>
                        <li>App Design</li>
                        <li>Web Development</li>
                      </ul>
                    </p>
                  </Container>
                  <div className="text-center mt-5">
                    <button className="button rounded-corners button-Modify">Get Started</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Pricing