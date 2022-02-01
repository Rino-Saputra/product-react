import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';

import navIcon from '../../assets/icon/nav-icon.svg';
import darkLight from '../../assets/icon/dark-light.svg';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function Headers() {
    return(
        <>
            <Navbar expand='md' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={ navIcon } /></Navbar.Brand>
                    <Navbar.Brand href="#home" className='fs-2 fw-bold'>Product</Navbar.Brand>
                    <Navbar.Toggle/>
                    <NavbarCollapse>
                        <Nav className="ms-auto d-flex align-items-center">
                            <Nav.Link href="#home" className='active'>Product</Nav.Link>
                            <Nav.Link href="#features">Customer</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Resource</Nav.Link>
                            <Nav.Link href="#pricing"><Button variant="outline-light">Search</Button></Nav.Link>
                            <Nav.Link href="#pricing"><Button variant="success">Success</Button></Nav.Link>
                            <Nav.Link href="#pricing"><img src={darkLight}/></Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    );
}

