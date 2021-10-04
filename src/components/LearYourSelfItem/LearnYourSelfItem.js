import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const LearnYourSelfItem = (props) => {
    const { number, article, icon } = props.item;
    return (

        <Col>
            <Card className="bg-white py-3 rounded">
                <div>
                    <i className={icon}> </i>
                </div>
                <div>
                    <h6> {number} {article}</h6>
                </div>
            </Card>
        </Col>

    );
};

export default LearnYourSelfItem;