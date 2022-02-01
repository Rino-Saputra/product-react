import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import imgFile from '../../assets/images/file.png'
import imgFile1 from '../../assets/images/file1.png'
import imgFile2 from '../../assets/images/file2.png'

export default function ManagementProduct(){
    return(
        <>
            <Container>
                <Row className='d-flex align-items-center mb-5'>
                    <Col md={6} className='mb-5 order-md-2'>
                        <img src={imgFile} className='img-fluid'></img>
                    </Col>
                    <Col className='order-md-1'>
                        <h6>Effortless Validation for</h6>
                        <h2 className="fs-1 fw-bold">Management</h2>
                        <p className="h-blur">The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <h5>Accessory makers</h5>
                        <p className="h-blur">While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h5>Alterationists</h5>
                        <p className="h-blur">If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center mb-5'>
                    <Col md={6} className='mb-5'>
                        <img src={imgFile1} className='img-fluid'></img>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h6>Easier decision making for</h6>
                                <h2 className="fs-1 fw-bold">Customer Support</h2>
                                <p className="h-blur">The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                            </Col>
                            <Row className='d-flex align-items-center mb-2'>
                                <Col md={2} xs={2}>
                                    <button class="list-button color1 text-light bg-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </button>
                                </Col>
                                <Col>
                                    <p className="h-blur">Never worry about overpaying for your energy again. </p>
                                </Col>
                            </Row>
                            <Row className='d-flex align-items-center mb-2'>
                                <Col md={2} xs={2}>
                                    <button class="list-button color1 text-light bg-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                    </button>
                                </Col>
                                <Col>
                                    <p className="h-blur">Never worry about overpaying for your energy again. </p>
                                </Col>
                            </Row>
                            <Row className='d-flex align-items-center mb-2'>
                                <Col md={2} xs={2}>
                                    <button class="list-button color1 text-light bg-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                    </button>
                                </Col>
                                <Col>
                                    <p className="h-blur">Never worry about overpaying for your energy again. </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex align-items-center mb-5'>
                    <Col md={6} className='mb-5 order-md-2'>
                        <img src={imgFile2} className='img-fluid'></img>
                    </Col>
                    <Col md={6} classname='order-md-1'>
                        <h6>Optimisation for</h6>
                        <h2 className="fs-1 fw-bold">Collaborative</h2>
                        <p className="h-blur">Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                        <h5>Accessory makers</h5>
                        <p className="h-blur">While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h5>Alterationists</h5>
                        <p className="h-blur">If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}