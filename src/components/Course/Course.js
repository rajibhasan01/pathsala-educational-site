import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { key, first_name, last_name, bg, courseName } = props.course;
    return (
        <Col className="pb-5">
            <Card className="rounded bg-light">
                <div>
                    <Card.Img className="rounded p-3" variant="top" src={bg} />
                </div>

                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text className="d-flex justify-content-between">
                        <div>
                            <span>{first_name} </span>
                            <span className="text-danger">{last_name}</span>
                        </div>
                        <div>
                            <Link to={`/course/${key}`} className="text-decoration-none text-primary">বিস্তারিত দেখুন <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;