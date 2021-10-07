import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import Aos from 'aos';
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import { Container, Col, Row } from 'react-bootstrap';
import './landingpage.styles.css'

const LandingPage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <header className="img" style={{ 
            backgroundImage: `url('assest/schwarma.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover' 
        }}>
            <Container>
                <Row className="height align-items-center py-5 text-center">
                    <Col>
                        <h1 data-aos='slide-right' className="display-5 intro-title text-light text-center mb-5 title">Welcome To Our <span className="color">Resturant</span></h1>
                        <h3 className="intro-subtitle text-white mb-2 text-capitalize">
                            <span  className="text-white">
                                <strong>
                                    <Typewriter options={{
                                            strings: ['we sell all kinds of food, snacks and drinks',  'delivery anywhere in the state', 'we have the fastest delivery service in town', 'the best resturant in town'],
                                            autoStart: true,
                                            loop: true,
                                        }}/>
                                </strong>
                            </span>
                        </h3>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default LandingPage
