import React from 'react';
import { Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card.styles.css';

export default function CardBody( {title, id, image, category, price, add} ) {
    return (
        <Col data-aos='zoom-in' md={6} xl={4} xs={12} className="my-4 mx-auto">
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
                    <div className="d-flex justify-content-between align-itemscenter">
                        <h6 className="my-auto"> {price} </h6>
                        {add}
                    </div>
                </div>
            </div>
        </Col> 
    );
}