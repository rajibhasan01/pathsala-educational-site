import React from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';
import useData1 from '../useData1/useData1';

const Courses = () => {
    const [courses, setCourses] = useData1();
    return (
        <div className="card-design py-5">
            <div className="container">
                <h2 className="text-center fw-bold"><span className="text-danger">দক্ষতা অর্জন করার </span>এখনই সময়</h2>
                <p className="text-center mb-5"> পছন্দের অনলাইন সাবস্ক্রাইব করে আপনার সময় ও সুযোগ অনুযায়ী দক্ষতা অর্জন করুন</p>

                <Row xs={1} md={4} className="g-4">
                    {
                        courses?.map(course => <SingleCourse
                            key={course.key}
                            course={course}
                        />)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Courses;