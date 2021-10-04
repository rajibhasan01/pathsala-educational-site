import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './Study.css';

const Study = (props) => {
    const { subject, image } = props.item;
    return (
        <Col >
            <Card>
                <div className="bg-white p2 rounded d-flex align-items-center">
                    <Image className="imagelogo my-auto" src={image}></Image>
                    <h6 className="fw-bold fs-5"> {subject}</h6>
                </div>
            </Card>
        </Col >
    );
};

export default Study;