import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import bannerimg from '../images/Group 82.png';
const Home = () => {
    return (

        <Container className='d-flex align-item-center mt-5'>
            <Row>
                <Col md={6}>
                    <h1 className="display-5 text-white">Creative <br />Solutions to</h1>
                    <h1 className="display-5 text-white fw-bold">Improve your <br />Business.</h1>
                </Col>
                <Col md={6} className="mb-5">
                    <img src={bannerimg} alt="Paytym Logo" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home