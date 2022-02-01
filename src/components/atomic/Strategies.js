import React from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';

import bg1 from '../../assets/icon/bg1.svg'
import bg2 from '../../assets/icon/bg2.svg'
import bg3 from '../../assets/icon/bg3.svg'

export default function Strategies(){

    function LoopImage(imgProps){
        return(
            <Col md={4} className='mb-4 d-flex justify-content-center'>
                <Card style={{width: '18rem'}}>
                    <img src={imgProps}></img>
                    <Card.Body>
                        <p className="text-secondary fw-bold">By <span className="text-dark">Wahid Ari</span> |  03 March 2019</p>
                        <h4 className="fw-bold text-dark">Increasing Prosperity With Positive Thinking</h4>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    return(
        <Container>
            <Row>
                <Col className='to-center'>
                    <h2 className="fs-1 fw-bold to-center">Contents Strategies</h2>
                    <p className="h-blur">We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                </Col>
            </Row>
            <Row>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Row className='py-5'>
                                {LoopImage(bg1)}
                                {LoopImage(bg2)}
                                {LoopImage(bg3)} 
                            </Row> 
                        </div>
                        <div className="carousel-item">
                            <Row className='py-5'>
                                {LoopImage(bg1)}
                                {LoopImage(bg2)}
                                {LoopImage(bg3)} 
                            </Row> 
                        </div>
                        <div className="carousel-item">
                            <Row className='py-5'>
                                {LoopImage(bg1)}
                                {LoopImage(bg2)}
                                {LoopImage(bg3)} 
                            </Row> 
                        </div>
                    </div>
                    <button className="carousel-control-prev d-flex justify-content-start" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next d-flex justify-content-end" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Row>
        </Container>
    );
}