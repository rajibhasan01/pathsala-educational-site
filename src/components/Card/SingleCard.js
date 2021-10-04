import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleCard.css';

const SingleCard = (props) => {
    const [img, text] = props.prop;
    return (
        <Col className="py-3">
            <Card className="card-radius border-0">
                <Card.Img src={img} className="image-desgin" />
                <Card.Body>
                    <Card.Title className="text-center fw-normal"> {text}</Card.Title>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default SingleCard;