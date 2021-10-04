import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import SingleCard from '../Card/SingleCard';
import bg from '../../image/bg.png';

const HomeBanner = (props) => {
    const { property } = props;

    return (
        <Card className="container card-design my-5">
            <Row xs={1} md={2}>
                <Col className="p-5 col-sm-12 col-md-7">
                    <h1 className="color"> <span className="text-red">ঘরে বসে</span> পড়াশোনার</h1>
                    <h1 className="color">সহজ সমাধান</h1>
                    <Card.Text className="pt-3">
                        ক্লাস ১-১২, ভর্তি পরীক্ষা, বিশ্ববিদ্যালয় ও চাকরি জীবনের জন্য পাবে স্পেশাল কোর্স, মডেল টেস্টসহ ২৪/৭ দিকনির্দেশনা। <span className="text-red fw-bold"> সিলেক্ট করো তোমার সেকশন, শুরু করো তোমার জার্নি </span>
                    </Card.Text>


                    <Row xs={1} md={3} className="g-4">
                        {
                            property.map((prop, i) => <SingleCard key={i} prop={prop} />)
                        }
                    </Row>

                </Col>

                <Col className="text-center my-5 col-sm-12 col-md-5">
                    <Image className="w-100" src={bg} rounded />
                </Col>
            </Row>
        </Card>
    );
};

export default HomeBanner;