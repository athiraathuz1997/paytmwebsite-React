import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import blog from '../images/blog.png';

const BlogContact = () => {
    return (
        <div>
      <Container>
        <Row>
          <h2 className="sect-head text-center pt-4 mt-5">Our Expert Team</h2>
          <p className="text-center blur-color">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout.
          </p>
        </Row>
        <img src={blog} alt="blog" className="img-fluid mt-4 mb-5" />
      </Container>
      <div className="finalbg-image">
        <div className="first-section">
          <h2 className="text-center pt-5 text-white mt-5">Get In Touch</h2>
          <p className="d-flex justify-content-center text-center text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout.
          </p>
        </div>
        <Container className="mt-5">
          <Row className="d-flex justify-content-around">
            <Col>
              <Form.Control type="text" placeholder="Name" className="first-name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Email" className="first-name" />
            </Col>
          </Row>
          <Row className="mt-4 text-center msg">
            <Col>
              <Form.Control as="textarea" placeholder="Message" />
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Button variant="primary" className="msg-btn mb-5">
                Send a Message
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default BlogContact