import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import LearnYourSelfItem from '../LearYourSelfItem/LearnYourSelfItem';
import useData from '../useData/useData';
import './LearnYourSelf.css';
import bg from '../../image/banner.png'

const LearnYourSelf = () => {
    const [items] = useData();
    return (
        <div className="card-design">
            <Card className="container card-design my-5 py-5 border-0 text-center">

                <h3 className="color">শেখো  <span className="text-red"> নিজের ইচ্ছেমতো!</span></h3>
                <Card.Text className="pt-3 text-secondary">
                    ভিডিও, কুইজ, ইন্টারেক্টিভ বই সমৃদ্ধ একাডেমিক লাইব্রেরি, প্রফেশনাল এবং স্কিল ডেভেলপমেন্ট <br /> কোর্সসমূহ পাবে সবসময়, সম্পূর্ণ বিনামূল্যে!
                </Card.Text>
                <div>
                    <button id="downloadbtn" className="mx-auto mt-3">ডাউনলোড অ্যাপ <i className="fas fa-download"></i></button>
                </div>


                <Row xs={1} md={4} className="g-3 mt-5">
                    {
                        items.map(item => <LearnYourSelfItem
                            key={item.key}
                            item={item}

                        />)
                    }
                </Row>
                <div className="mt-5">
                    <Image className="w-50" src={bg}></Image>
                </div>
            </Card>
        </div>
    );
};

export default LearnYourSelf;