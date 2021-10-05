import React, { Component } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import AboutHeader from '../about-header/about-header.component';
import MenuData from '../menudata/menudata.component';
import CustomButton from '../button/button.component';
import Pagination from "react-js-pagination";

import './menu.styles.css';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
        //   itemClass= page-item,
        //   linkClass= page-link
        };
    }

        handlePageChange(pageNumber) {
            console.log(`active page is ${pageNumber}`);
            this.setState({activePage: pageNumber});
          }
          
         
    render() {
    return (
    //     <div>
    //     <Pagination
    //       activePage={this.state.activePage}
    //       itemsCountPerPage={10}
    //       totalItemsCount={450}
    //       pageRangeDisplayed={5}
    //       onChange={this.handlePageChange.bind(this)}
    //     />
    //   </div>
        <div>
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={6}
                totalItemsCount={22}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
            />
            <AboutHeader> Menu </AboutHeader>
            <section className="py-5">
                <Container dataaos='fade-up'>
                    <Row>
                        <Col className="justify-content-center">
                            <Row>
                                <Col md={3} className="m-auto mt-0">
                                    <form action="">
                                        <Card>
                                            <Card.Header> <h3> Filter </h3> </Card.Header>
                                            <Card.Text className="m-3">
                                            <div className="form-group">
                                                <label for=""> Keyword </label>
                                                <input class="form-control" type="text" placeholder="e.g rice" />
                                            </div> <br/>

                                            <div className="form-group">
                                                <label className="text-dark"> Category </label>
                                                <select class="form-control" id="category">
                                                    <option> All </option>
                                                    <option> Rice </option>
                                                    <option> Drinks </option>
                                                    <option> Chicken/Turkey </option>
                                                    <option> Snacks </option>
                                                </select>
                                            </div> <br/>

                                            <div className="form-group">
                                                <label htmlFor=""> Sort </label>
                                                <Row>
                                                    <Col md={6}>
                                                        <select class="form-control" id="category">
                                                            <option> Default </option>
                                                            <option> Title </option>
                                                            <option> Price </option>
                                                            <option> Date Added </option>
                                                        </select>
                                                    </Col>
                                        
                                                    <Col md={6}>
                                                        <select class="form-control" id="category">
                                                            <option> Ascending </option>
                                                            <option> Descending </option>
                                                        </select>
                                                    </Col>
                                                </Row>
                                            </div>
                                            </Card.Text>
                                            <CustomButton> Search </CustomButton>
                                        </Card>
                                    </form>
                                </Col>
                                
                                {/* <Row> */}
                                    <Col md={9} className="m-auto mt-0">
                                        <Row>
                                            <MenuData />
                                        </Row>
                                    </Col>
                                {/* </Row> */}
                            </Row>
                        </Col>
                    </Row>
                </Container> 
            </section>
        </div>
    )
}
}

export default Menu;
