import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import navIcon from '../../assets/icon/nav-icon.svg';
import twitterIcon from '../../assets/icon/twiiter.svg';
import fbIcon from '../../assets/icon/fb.svg';

export default function Footer(){
    return(
        <>
            <Container className='text-light'>
                <Row>
                    <Col md={3} className='to-center mb-5'>
                        <img src={navIcon}></img>
                        <h2 className='fs-4 fw-bold' style={{display: 'inline-block'}}>Product</h2><br />
                        <img src={fbIcon}></img>
                        <img src={twitterIcon} className='px-4 py-4'></img>
                        <img src={twitterIcon}></img>
                    </Col>
                    <Col md={3} className='to-center mb-5'>
                        <p className="fw-bold fs-5">Resource</p>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>Page</p>
                    </Col>
                    <Col md={3} className='to-center mb-5'>
                        <p className="fw-bold fs-5">Resource</p>
                        <p>Legal</p>
                        <p>Disclaimer</p>
                        <p>FInancing</p>
                        <p>Privacy and polciy</p>
                        <p>Term of service</p>
                    </Col>
                    <Col md={3} className='to-center mb-5'>
                        <p class="fw-bold fs-5">knowing you are on the best energy deal.</p>
                        <form>
                            <div class="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <button type="submit" className="btn btn-primary color5 text-light">Signup now</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}