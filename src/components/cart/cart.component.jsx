import React from 'react';
import { Container, Col, Row, Card, Table } from 'react-bootstrap';
import CustomButton from '../button/button.component'
import AboutHeader from '../about-header/about-header.component';
import './cart.styles.css'

function Cart() {
    return (
        <div className="shadow border-0 rounded-0">
             <AboutHeader> Cart </AboutHeader>
            <section className="py-5">
                <Container dataaos='fade-up' className=" box-shadow-full">
                    <Row>
                        <Col className="justify-content-center">
                            <Row>
                                <Col md={4} className="m-auto mt-0">
                                    <form action="">
                                        <div className="form-group">
                                            <label for=""> Fullname </label>
                                            <input className="form-control" type="text" />
                                        </div> <br/>

                                        <div className="form-group">
                                            <label for=""> Delivery Address </label>
                                            <textarea class="form-control" rows="3" />
                                        </div> <br/>

                                        <div className="form-group">
                                            <label for=""> Email Address </label>
                                            <input className="form-control" type="email" />
                                        </div> <br/>

                                        <div className="form-group">
                                            <label for=""> Phone </label>
                                            <input className="form-control" type="tel" />
                                        </div>
                                    </form>
                                </Col>
                                
                                <Col md={7} className="m-auto mt-1">
                                    <Row>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                            <th>#</th>
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <td>3</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <td>4</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <td>5</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                        </tbody>
                                    </Table> 
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="radio" name="delivery" id="payDelivery" value="option1" checked />
                                        <label className="form-check-label" for="payDelivery">
                                            Payment On Delivery
                                        </label>
                                        </div>
                                        <div className="form-check mb-4">
                                        <input className="form-check-input" type="radio" name="online" id="payOnline" value="option2" />
                                        <label className="form-check-label" for="payOnline">
                                            Payment Online
                                        </label>
                                    </div>
                                    <CustomButton> Order Now </CustomButton>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container> 
            </section>
        </div>
    )
}

export default Cart;
