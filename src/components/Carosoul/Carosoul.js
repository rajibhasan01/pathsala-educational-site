import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useData1 from '../useData1/useData1';

const Carosoul = () => {
    const [courses, setCourses] = useData1();

    return (
        <div className="card-design py-5">
            <div className="container">
                <h2 className="text-center my-5 fw-bold"><span className="text-danger">ক্যারিয়ার ও স্কিল </span>ডেভেলপমেন্ট</h2>
                <Carousel>
                    <Carousel.Item>
                        <Row xs={1} md={4} className="g-4">
                            {
                                courses?.slice(0, 4).map(course => <Course
                                    key={course.key}
                                    course={course}
                                />)
                            }
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row xs={1} md={4} className="g-4">
                            {
                                courses?.slice(4, 8).map(course => <Course
                                    key={course.key}
                                    course={course}
                                />)
                            }
                        </Row>

                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default Carosoul;