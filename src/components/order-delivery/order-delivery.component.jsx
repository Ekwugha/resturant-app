import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/button/button.component';
import { Container, Col, Row } from 'react-bootstrap';
import './order-delivery.styles.css';

function OrderDelivery() {
    return (
        <div>
            <Container data-aos='fade-up'>
                <Row>
                    <Col className="justify-content-center">
                        <div>
                            <Row className="box">
                                <Col md={6} className="m-auto">
                                    <h1>Don't enjoy standing in line to place your order? <span className="color">Click on the button to get your order ready before you get here</span></h1>
                                    <Link as={Link} to="/menu" className="link"> <CustomButton> Order Food </CustomButton> </Link>
                                </Col>
                                <Col md={6} className="m-auto">
                                    <h1>Don't have time to come over to collect your order? <span className="color">Click on the button below to get your order at your doorstep</span></h1>
                                    <Link as={Link} to="/menu" className="link"> <CustomButton> Delivery </CustomButton> </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default OrderDelivery;
