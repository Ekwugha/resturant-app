import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './footer.styles.css';

const Footer = () => (
    <footer className="py-5 bg" id="footer1">
        <Container  id="footer">
            <Row>   
                <Col xs={12} md={3}>
                    <h5>Payment Options</h5>
                    <p className="text-secondary">Payments are made on delivery via direct cash or bank transfer</p>
                </Col>

                <Col xs={12} md={3}>
                    <h5>Address</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Office: Anambra State</li>
                        <li>info@resturant.com</li>
                    </ul>
                </Col>

                <Col xs={12} md={3}>
                    <h5>Phone</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>Office: +(234) 708 6000 042</li>
                        <li>Support: +(234) 708 6000 042</li>
                    </ul>
                </Col>

                <Col xs={12} md={3}>
                    <h5>Socials</h5>
                    <Row>
                        <ul className="nav justify-content-center text-secondary">
                            <Col xs={3}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon className="text-secondary hover" icon={faEnvelope} />
                                    </a>
                                </li>
                                </Col>

                                <Col xs={3}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon className="text-secondary hover" icon={faTwitter} />
                                    </a>
                                </li>
                                </Col>

                                <Col xs={3}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FontAwesomeIcon className="text-secondary hover" icon={faInstagram} />
                                    </a>
                                </li>
                                </Col>

                                <Col xs={3}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> 
                                        <FontAwesomeIcon className="text-secondary hover" icon={faFacebookF} />
                                    </a>
                                </li>
                            </Col>
                        </ul>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <p className="footer-text text-center pt-5">&copy; Resturant Food. All Right Reserved <br/> Developed by <a href="https://elochukwuekwugha.netlify.app/" className="color">Ekwugha Elochukwu</a>. 
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
);
  
export default Footer;