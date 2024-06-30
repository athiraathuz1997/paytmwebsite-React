import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Leaves from '../images/Leaves.png';
import Calendar from '../images/calenderMark.png';
import OTP from '../images/OTP.png';
import Dashboard from '../images/Dashboard.png';
import picCalendar from '../images/Calendar.png';
import leave from '../images/Addleave.png';


const Showcase = () => {
    return (
        <div className="section">
      <Container>
        <div className="col-md-12">
          <div className="first-section">
            <h2 className="text-center pt-5 text-white mt-5">Showcase</h2>
            <p className="d-flex justify-content-center text-center text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="col-md-12 mt-5">
            <Row className="gy-3">
              <Col sm={6} md={2} className="text-center">
                <img src={Leaves} alt="Leaves" className="img-fluid" />
              </Col>
              <Col sm={6} md={2} className="text-center">
                <img src={Calendar} alt="Calendar" className="img-fluid" />
              </Col>
              <Col sm={6} md={2} className="text-center">
                <img src={OTP} alt="OTP" className="img-fluid" />
              </Col>
              <Col sm={6} md={2} className="text-center">
                <img src={Dashboard} alt="Dashboard" className="img-fluid" />
              </Col>
              <Col sm={6} md={2} className="mb-3 text-center">
                <img src={picCalendar} alt="Pic Calendar" className="img-fluid" />
              </Col>
              <Col sm={6} md={2} className="mb-3 text-center">
                <img src={leave} alt="Leave" className="img-fluid" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
    )
}

export default Showcase