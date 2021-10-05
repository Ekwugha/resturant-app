import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './about-header.styles.css'


function AboutHeader({ children }) {
    return (
        <header className="img vheight" style={{ 
            backgroundImage: `url('assest/about3.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Container>
                <Row className="vheight align-items-center">
                    <Col>
                        <h3 className="text-center text-light text-bold about-header-bg"> { children } </h3>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default AboutHeader;
