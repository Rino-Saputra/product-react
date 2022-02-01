import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import images from './utilAtomic/GetImages';

export default function Testimony(){

    function LoopClient(images){
        return(
            <Col md={4} className='mb-5'>
                <Card>
                    <Card.Body>
                        <img src={images.star} alt=""></img>
                        <img src={images.star} alt=""></img>
                        <img src={images.star} alt=""></img>
                        <img src={images.star} alt=""></img>
                        <img src={images.emptystart} alt=""></img>
                        <p className="card-text mt-2">Product helps you see how many more days you need to work to reach your financial goal.</p>
                        <div className="row d-flex align-items-center">
                        <div className="col-2">
                            <img src={images.customer1} alt=""></img>
                        </div>
                        <div className="col-7 text-start">
                            <h5 className="color-t fw-bold">Rino Saputra</h5>
                            <h5 className='fs-6'>Web Development</h5>
                        </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return(
        <Container className='text-dark'>
            <Row className='text-center mb-2'>
                <Col>
                    <h2 className="fs-1 fw-bold">What Clients Say</h2>
                    <p className="h-blur">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </Col>
            </Row>
            <Row>
                {LoopClient(images)}
                {LoopClient(images)}
                {LoopClient(images)}
            </Row>
        </Container>
    );
}