import React from 'react';
import { Row } from 'react-bootstrap';
import Study from '../Study/Study';

const Admission = (props) => {
    const { subjects } = props;
    return (
        <div>
            <div className="my-5">
                <h3 className="fw-bold">বিজ্ঞান বিভাগ</h3>
                <Row xs={1} md={2} lg={2} xl={3} className="g-3 my-2">
                    {
                        subjects?.slice(0, 5).map((subject, i) => <Study
                            key={i}
                            item={subject}
                        />)
                    }
                </Row>
            </div>

            <div className="my-5">
                <h3 className="fw-bold">ব্যবসায় শিক্ষা বিভাগ</h3>
                <Row xs={1} md={2} lg={2} xl={3} className="g-3 my-2">
                    {
                        subjects?.slice(13).map((subject, i) => <Study
                            key={i}
                            item={subject}
                        />)
                    }
                </Row>
            </div>

            <div className="my-5">
                <h3 className="fw-bold">মানবিক বিভাগ</h3>
                <Row xs={1} md={2} lg={2} xl={3} className="g-3 my-2">
                    {
                        subjects?.slice(5, 13).map((subject, i) => <Study
                            key={i}
                            item={subject}
                        />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Admission;