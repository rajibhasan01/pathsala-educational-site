import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import './LearnYourSelf.css';

const LearnYourSelf = () => {
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


                <Row xs={1} md={3} className="g-4">
                    {

                    }
                </Row>
            </Card>
        </div>
    );
};

export default LearnYourSelf;