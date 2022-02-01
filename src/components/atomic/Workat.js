import React from 'react';
import { Row, Col, Container, Button} from "react-bootstrap";

import image1 from '../../assets/icon/socmed.svg'

export default function Workat(){
    return(
        <>
            <Container>
                <Row className='d-flex align-items-center justify-content-center mb-5 mb-5 to-center'>
                    <Col md={6} className='order-md-2 mb-5'>
                        <img src={image1} className='img-fluid'></img>
                    </Col>
                    <Col md={6} className='order-md-1'>
                        <h2 class="fs-1 fw-bold">Work at the speed of thought</h2>
                        <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                        <a href=""><button type="button" className="btn btn-success px-4">Get started</button></a>
                        <button type="button" className="btn btn-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                            Watch the video
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}