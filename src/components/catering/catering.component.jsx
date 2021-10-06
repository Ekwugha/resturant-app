import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/button/button.component';

function Catering() {
    return (
        <section data-aos = "fade-in" className="py-3 py-lg-5 text-white mb-3" style={{
                backgroundImage: "url(https://naijakitchen01.com/assets/images/city-2.png)",
                backgroundColor: "orange",
                backgroundBlendMode: "darken",
                backgroundSize: "cover",
                backgroundPosition: "bottom"
            }}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={9}>
                        <h2 className="text-white font-weight-lighter">Having an upcoming event?</h2> 
                        <p className="lead text-white-50">Let's handle the catering of the event based on your financial capabilities and budget and all...</p>
                    </Col>
                    <Col lg={3} className="text-center text-lg-right">
                        {/* <CustomButton> Tell Us About It </CustomButton>  */}
                        <Link as={Link} to="/contact" className="link"> <CustomButton> Tell Us About It </CustomButton> </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Catering;
