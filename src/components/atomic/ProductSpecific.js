import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import arrow from '../../assets/images/arrow.png';
import arrow2 from '../../assets/images/arrow2.png';
import arrow3 from '../../assets/images/arrow3.png';
import arrow4 from '../../assets/images/arrow4.png';


export default function ProductSpecific(){
    return(
        <>
            <Container>
                <Row className='text-center mt-5'>
                    <Col>
                        <h2 className="fs-1 fw-bold">Product  was Built Specifically</h2>
                        <h2 className="fs-1 fw-bold">for You</h2>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center justify-content-center text-light to-center'>
                    <Col md={3} className='mt-5'>
                        <Card className='bg-dark'>
                            <Card.Body>
                                <button className="list-button color1"><img src={arrow}></img></button>
                                <Card.Title className='my-4'>First click tests</Card.Title>
                                <Card.Text>While most people enjoy casino gambling,</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='mt-5'>
                        <Card className='bg-dark'>
                            <Card.Body>
                                <button className="list-button color2"><img src={arrow2}></img></button>
                                <Card.Title className='my-4'>Preference tests</Card.Title>
                                <Card.Text>The Myspace page defines the individual.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='mt-5'>
                        <Card className='bg-dark'>
                            <Card.Body>
                                <button className="list-button color3"><img src={arrow3}></img></button>
                                <Card.Title className='my-4'>Design surveysent</Card.Title>
                                <Card.Text>The Myspace page defines the individual</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className='mt-5'>
                        <Card className='bg-dark'>
                            <Card.Body>
                                <button className="list-button color4"><img src={arrow4}></img></button>
                                <Card.Title className='my-4'>Five second tests</Card.Title>
                                <Card.Text>Personal choices and the overall personality of the person. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <button type="button" className="btn btn-success mb-5 mt-5">Sign up now</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}