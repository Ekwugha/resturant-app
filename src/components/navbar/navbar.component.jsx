import React, { useState } from 'react';
import { Container, Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBars, faShoppingCart, faUser, faInfoCircle, faUtensils, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from '../button/button.component'
import './navbar.styles.css';

export default function CustomNavbar() {
    // for the navbar
    const [navbar, setNavbar] = useState(false);
    const [navbarbrand, setColor] = useState(false);
    const [expanded, setExpanded] = useState(false);  

    // for modal in login navlink
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
            
        } else {
            setNavbar(false);
        }
    };

    const changeColor = () => {
        if(window.scrollY >= 80){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeColor);
        
    return (
        <>
        <Navbar expanded={expanded} scrolling='true' light="true" expand="md" fixed="top" variant="dark" bg="white" className={navbar ? 'navbar active' : 'navbar'}>

            {/* navbar links */}
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text-bold py-3' : 'color text-bold py-3'}>RESTURANT FOODS</Navbar.Brand>
                
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className={navbarbrand ? 'color' : 'color text'}>
                    <FontAwesomeIcon icon={faBars}  size="lg"/>
                </Navbar.Toggle  >

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'color text'} > <FontAwesomeIcon icon={faHome} /> Home </Nav.Link>

                    <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'color text'} > <FontAwesomeIcon icon={faInfoCircle} /> About </Nav.Link>

                    <Nav.Link as={Link} to="/menu" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'color text'} > <FontAwesomeIcon icon={faUtensils} /> Menu </Nav.Link>
                </Nav>

                <>
                <Nav>
                    <>
                    <Nav.Link onClick={handleShow} className="d-flex align-items-center justify-content-center" className={navbarbrand ? 'color text' : 'color text'} > Login <FontAwesomeIcon icon={faUser} /> 
                    
                    {/* login modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className="text-center" closeButton>
                            <Modal.Title>Administrative Only</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username" className="mb-1">UserName</label>
                                    <input type="text" className="form-control" id="username" placeholder="username" />
                                </div> <br/>
                                <div className="form-group">
                                    <label htmlFor="password" className="mb-1">Password</label>
                                    <input type="password" className="form-control" id="Password" placeholder="Password" />
                                </div> <br/>
                                <CustomButton type="submit">Submit</CustomButton>
                            </form>
                        </Modal.Body>
                    </Modal> 
    
                    </Nav.Link>
                    </>


                    <Nav.Link as={Link} to="/cart" onClick={() => setExpanded(false)} className={navbarbrand ? 'color text' : 'color text'} > Cart <FontAwesomeIcon icon={faShoppingCart} />  </Nav.Link>
                </Nav>
                </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}