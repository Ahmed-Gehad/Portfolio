import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../imges/logo.jpg'


// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

import ahmedGehad from '../Component/Ahmed Gehad Afify.pdf'

function Navv() {
    return (

        <div className='navBar px-4'>
            <Navbar expand="lg" className="">
                <Container>
                    
                    <Navbar.Brand href="#Home">
                         <img
                        src={logo}
                       
                        className="d-inline-block align-top rounded-circle w-50 "
                        alt="Ahmed gehad"
                    /></Navbar.Brand>
                

                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
                        <Nav className="align-items-center">
                            <Nav.Link href="#Home" className='link me-3 text-white'>Home</Nav.Link>
                            <Nav.Link href="#About" className='link me-3 text-white'>About</Nav.Link>
                            <Nav.Link href="#Experience" className='link me-3 text-white'>Experience</Nav.Link>
                            <Nav.Link href="#Projects" className='link me-3 text-white'>Projects</Nav.Link>
                            <Nav.Link href="#Contact" className='link me-3 text-white'>Contact</Nav.Link>
                        </Nav>
                       
                            <motion.button
                                whileTap={{ scale: 0.65 }} className='motionBtn '>
                                <Button variant="success" to="ContactPage" className='ms-5' >
                                    <a href={ahmedGehad} download='ahmedGehad' >Download CV</a>
                                    </Button>
                            </motion.button>
                        

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navv