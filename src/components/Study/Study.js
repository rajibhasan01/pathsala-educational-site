import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './Study.css';

const Study = (props) => {
    const { subject, image } = props.item;
    return (
        <Col >
            <div className="border-0 ">
                <div className="rounded-pill border-0 d-flex align-items-center bg-color">
                    <Image className="imagelogo p-2" src={image}></Image>
                    <h6 className="fw-bold fs-5"> {subject}</h6>
                </div>
            </div>
        </Col >
    );
};

export default Study;