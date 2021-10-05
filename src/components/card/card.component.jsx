import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './card.styles.css';

export default function CardBody( {title, id, image, category, price, add} ) {
    return (
        <Col data-aos='zoom-in' md={4} xl={4} xs={6} className="my-4 ">
            <div className="card shadow border-0 rounded-0">
                <div style={{ 
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: "10rem",
                width:"100%",
                backgroundBlendMode:'darken',
                backgroundColor:"#04040475" 
                }}></div>
                
                <div className="card-body">
                    <h3 className="lead">{ title }</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6> {price}</h6>
                        {add}
                    </div>
                </div>
            </div>
        </Col> 
    );
}