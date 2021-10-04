import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Module from '../Module/Module';
import './Service.css';

const Service = (props) => {
    const { course, image, title } = props.item;
    return (
        <Col>
            <Card className="card-color">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center fw-bold">{title}</Card.Title>
                    <Card.Text className="d-flex flex-wrap">
                        {
                            course?.map((cr, i) => <Module
                                key={i}
                                cr={cr}
                            />)
                        }
                    </Card.Text>
                    <div className="text-center">
                        <button id="hireBtn" className="mx-auto mt-3">বিস্তারিত দেখুন <i className="fas fa-arrow-circle-right"></i></button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;