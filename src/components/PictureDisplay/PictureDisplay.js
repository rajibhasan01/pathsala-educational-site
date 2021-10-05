import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PictureDisplay = (props) => {
    const { picture } = props;
    return (
        <Col>
            <Card.Img variant="top" src={picture} />
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Col>
    );
};

export default PictureDisplay;