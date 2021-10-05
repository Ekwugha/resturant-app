import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HomeMenuData from '../homemenudata/homemenudata.component';

function HomeMenu(id, title, image) {
    return (
        <section className="background">
            <Container>
                <Row>
                    <Col className="my-5">
                        <Row>
                            <HomeMenuData />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeMenu;
