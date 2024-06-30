import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Group68 from '../images/laptop.png';
import Group63 from '../images/board.png';
import Group69 from '../images/search.png';

const Working = () => {
    return (
        <Container>
        <div className="col-md-12">
          <div className="second-section">
            <h2 className="sect-head text-center pt-4">How It Works?</h2>
            <p className="d-flex justify-content-center text-center blur-color">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              at its layout.
            </p>
          </div>
        </div>
        <Row>
          <Col md={4} className="text-center">
            <img src={Group68} alt="Group68" className="img-fluid mt-5" />
            <h5 className="text-center color-title mt-4">Choose a Plan</h5>
            <p className="card-text text-center">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img src={Group63} alt="Group63" className="img-fluid" />
            <h5 className="text-center color-title mt-3">Payment Method</h5>
            <p className="card-text text-center">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <img src={Group69} alt="Group69" className="img-fluid mt-5" />
            <h5 className="text-center color-title mt-4">Let's Work</h5>
            <p className="card-text text-center">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour.
            </p>
          </Col>
        </Row>
      </Container>
    )
}

export default Working