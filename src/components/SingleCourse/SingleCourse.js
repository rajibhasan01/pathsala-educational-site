import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './SingleCoures.css';

const SingleCourse = (props) => {
    const { key, first_name, last_name, bg, courseName, image, cost, time, level, lectures, color, enrolled, course } = props.course;

    return (
        <Col className="pb-3">
            <Card className="rounded bg-light">
                <div>
                    <Card.Img className="rounded p-3" variant="top" src={bg} />
                </div>

                <Card.Body>
                    <Card.Text className="d-flex justify-content-between align-items-center">

                        <button className="border-0 rounded-pill px-3" style={{ backgroundColor: color }}>{course}</button>
                        <p className="my-auto fw-bold">{enrolled} <small className="fw-normal">Enrolled</small></p>

                    </Card.Text>
                    <Card.Text class="courseName">{courseName}</Card.Text>
                    <Card.Text >
                        <div className="d-flex justify-content-between">
                            <small><i className="fas fa-clock text-danger"></i> {time}</small>
                            <small><i className="fas fa-video text-success"></i> {lectures} Lectures</small>
                            <small><i className="fas fa-layer-group text-warning"></i> {level}</small>
                        </div>
                    </Card.Text>
                </Card.Body>


                <Card.Footer className="d-flex justify-content-between">
                    <div>
                        <Image src={image} className="image"></Image>
                        <span> {first_name} </span>
                        <span className="text-danger">{last_name}</span>
                    </div>
                    <div>
                        <h4 className="text-success fw-bold">${cost}</h4>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleCourse;