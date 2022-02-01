import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function CardPricing(){

    function Loopcard(passProperties){
        return(
            <Col md={4} className='to-center d-flex justify-content-center mb-5'>
                <Card border="primary" className={`${passProperties.nameClass}`} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{passProperties.type}</Card.Title>
                        <Card.Text className='h-blur fw-bold'> Brief price description</Card.Text>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col>
                                <h1 className={`large-font ${passProperties.primeText}`}>{passProperties.number}</h1>
                            </Col>
                            <Col className='text-start'>
                                <h4 className="color-t fw-bold">$</h4>
                                <h5 className="h-blur">Per / Month</h5>
                            </Col>
                        </Row>
                            <p className='fw-bold'>{passProperties.operator} Operators</p>
                            <p className='fw-bold'>Notifications</p>
                            <p className='fw-bold'>Landing Pages</p>
                            <a href="#" class={`btn btn-primary rounded fw-bold ${passProperties.btn}`}>Order now</a>
                    </Card.Body>
                </Card>
            </Col>
        );     
    }
    

    return(
        <>
            <Container>
                <Row>
                    {Loopcard({number: 0,operator: 'Only 2', type: 'Free', nameClass: 'text-dark bg-white',primeText: 'color-t', btn: 'color5'})}
                    {Loopcard({number: 5, operator: '5+', type: 'Standard', nameClass: 'text-light color5',primeText: 'text-light', btn: 'bg-light text-dark'})}
                    {Loopcard({number: 10, operator: '10+', type: 'Premium', nameClass: 'text-dark bg-white',primeText: 'color-t', btn: 'color5'})}
                </Row>
            </Container>
        </>
    );
}