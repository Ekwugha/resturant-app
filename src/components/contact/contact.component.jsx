import React from 'react';
import AboutHeader from '../about-header/about-header.component';
import CustomButton from '../button/button.component'; 
import { Container, Col, Row } from 'react-bootstrap';
import './contact.styles.css'

function Contact() {
    return (
        <div>
            <AboutHeader> Contact Us </AboutHeader>
            <section className="py-5 g">
            <Container>
                <Row>
                    <Col>
                        <div className="box-shadow-full">
                            <Row>
                                <h3 className="text-dark"> Leave a message. </h3>
                                <div className="title-underline"></div>
                                <form name="contact" className="py-3 border-0" data-netlify="true"  id="my-form" >
                                <Row>
                                    <Col md={6} className="form-group py-2">
                                        <input type="name" name="name" id="name" class="form-control p" placeholder="Your Name" required />
                                    </Col>
                                    <Col md={6} className="form-group py-2">
                                        <input type="subject"  name="subject" id="subject" class="form-control" placeholder="Subject" required />
                                    </Col>
                                    <div className="form-group py-2">
                                        <textarea type="message"  name="message" id="message" cols="120" rows="5" class="form-control" placeholder="Your Message"
                                            required></textarea>
                                    </div>
                                    <CustomButton> Send </CustomButton>
                                </Row>
                                </form>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    )
}

export default Contact
