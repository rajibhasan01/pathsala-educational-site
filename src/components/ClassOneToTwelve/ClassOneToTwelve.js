import React from 'react';
import { Row } from 'react-bootstrap';
import Study from '../Study/Study';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';


const ClassOneToTwelve = (props) => {
    const { subjects } = props;
    return (
        <>
            <DashBoardHeader />
            <div>
                <div className="my-5">
                    <h3 className="fw-bold">সাধারণ</h3>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-3 my-2">
                        {
                            subjects?.slice(0, 5).map((subject, i) => <Study
                                key={i}
                                item={subject}
                            />)
                        }
                    </Row>
                </div>

                <div className="my-5">
                    <h3 className="fw-bold">মানবিক</h3>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-3 my-2">
                        {
                            subjects?.slice(13).map((subject, i) => <Study
                                key={i}
                                item={subject}
                            />)
                        }
                    </Row>
                </div>

                <div className="my-5">
                    <h3 className="fw-bold">বিজ্ঞান</h3>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-3 my-2">
                        {
                            subjects?.slice(5, 13).map((subject, i) => <Study
                                key={i}
                                item={subject}
                            />)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ClassOneToTwelve;