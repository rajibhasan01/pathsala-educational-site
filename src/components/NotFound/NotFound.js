import React from 'react';
import { Card, Image } from 'react-bootstrap';
import image from '../../image/notFound.png';

const NotFound = () => {
    return (
        <div className="text-center">
            <Card className="bg-dark text-white">
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>404</Card.Title>
                    <h4>Not Found</h4>
                    <Card.Text>
                        The resource requested could not be found on this server
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default NotFound;