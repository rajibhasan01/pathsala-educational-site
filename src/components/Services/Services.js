import React from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
    const { items } = props;
    return (
        <div className="container my-5 py-md-5">
            <Row xs={1} md={4} className="g-4">
                {
                    items.map(item => <Service
                        key={item.key}
                        item={item}
                    />)
                }
            </Row>
        </div>
    );
};

export default Services;