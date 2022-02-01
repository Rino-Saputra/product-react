import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import screenImg from '../../../assets/icon/screen.svg'

export default function JoinCompanies(){
    return(
        <>
            <Container className='mb-5'>
                <Row className='d-flex justify-content-center align-items-center to-center pl-2 br color5'>
                    <Col md={8} className='to-center'>
                        <h2 className='mb-5'>Join 100 Compannies who boost their business with Product</h2>
                        <button type="button" className='btn btn-light px-5 color-t fw-bold'>Get this</button>
                    </Col>
                    <Col md={4} className='text-center'>
                        <img src={screenImg} className='img-fluid'></img>
                    </Col>
                </Row>
            </Container>
        </>
    );
}