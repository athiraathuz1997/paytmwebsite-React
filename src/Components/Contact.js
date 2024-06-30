import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Paytymsec from '../images/Paytym-sec.png';
import appstore from '../images/appstore.png';
import gplay from '../images/gplay.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <Container className="mb-5">
      <Row>
        <Col sm={6} md={3}>
          <img src={Paytymsec} alt="Paytymsec" className="img-fluid" />
          <p className="card-text">555 NOrth Orchard Street Kings Mountain, NY 28086 </p>
          <p className="card-text">Email: info@yourdomain.com</p>
          <p className="card-text">Call : +1 245 369 8741</p>
          <div className="mt-2 d-flex">
            <FaFacebook className="icon-modify" />
            <FaTwitter className="icon-modify" />
            <FaInstagram className="icon-modify" />
          </div>
        </Col>
        <Col sm={6} md={3}>
          <h5 className="color-title mt-5">Quick Links</h5>
          <div>
            <p className="card-text">Home</p>
            <p className="card-text">About Us</p>
            <p className="card-text">Features</p>
            <p className="card-text">FAQ</p>
            <p className="card-text">Contact</p>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <h5 className="color-title mt-5">Support</h5>
          <div>
            <p className="card-text">Help & Support</p>
            <p className="card-text">Privacy Policy</p>
            <p className="card-text">Terms & Conditions</p>
          </div>
        </Col>
        <Col sm={6} md={3}>
          <h5 className="color-title mt-5">Download</h5>
          <div>
            <img src={appstore} alt="App Store" className="img-fluid mt-3" />
            <img src={gplay} alt="Google Play" className="img-fluid mt-3" />
          </div>
        </Col>
      </Row>
    </Container>
    )
}

export default Contact