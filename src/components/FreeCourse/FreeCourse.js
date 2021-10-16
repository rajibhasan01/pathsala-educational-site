import React from 'react';
import { Card, Row } from 'react-bootstrap';
import p1 from '../../free education/p-1.jpg';
import p2 from '../../free education/p2.jpg';
import p3 from '../../free education/p3.jpg';
import p4 from '../../free education/pp.jpg';
import p5 from '../../free education/rural.jpg';
import p6 from '../../free education/p6.jpg';
import poor from '../../free education/poor.jpg';
import PictureDisplay from '../PictureDisplay/PictureDisplay';
import DashBoardHeader from '../DashBoardHeader/DashBoardHeader';

const pictures = [p1, p3, p2, p4, p6, p5];

const FreeCourse = () => {
    return (

        <>
            <DashBoardHeader />
            <div className="py-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        pictures?.map((picture, i) => <PictureDisplay
                            key={i}
                            picture={picture}
                        />)
                    }
                </Row>

                <Card className="border-0 bg-light pt-5">
                    <Card.Img variant="top" src={poor} className="mx-auto" />
                    <Card.Body>
                        <Card.Text className="text-center my-3">
                            <i className="fas fa-quote-left text-danger"></i><sub className="fs-4 fw-bold text-muted"> Money cannot eradicate poverty, only education can. </sub><i className="fas fa-quote-right text-danger"></i>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default FreeCourse;