import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import goCode from "../imges/code.jpg"

// import react awesome
// for run npm i @emotion/react and npm i react-awesome-reveal
import { Zoom } from 'react-awesome-reveal';

const Experience = () => {
    return (
        <div className='experience text-white px-4' id='Experience'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center '>
                        <h1 className='fw-bold mt-5 text-orange'>Experience</h1>
                        <div className="darkline my-4 mx-auto"></div>
                    </Col>

                    <Col lg={6} >
                        <Zoom>
                            <div className='d-flex  text-center align-items-center justify-content-between mx-5 my-4' >
                                <div className='me-4 html'>
                                    <i class="fa-brands fa-html5 fs-1 mb-2"></i>
                                    <p>HTML</p>
                                </div>
                                <div className='me-4 css'>
                                    <i class="fa-brands fa-css3-alt fs-1 mb-2"></i>
                                    <p>CSS</p>
                                </div>
                                <div className='react'>
                                    <i class="fa-brands fa-react fs-1 mb-2"></i>
                                    <p>REACT</p>
                                </div>
                            </div>
                            <div className='d-flex  text-center align-items-center justify-content-between mx-5 my-3'>
                                <div className='me-3 github'>
                                    <i class="fa-brands fa-github fs-1 mb-2"></i>
                                    <p>Github</p>
                                </div>
                                <div className='me-3 bootstrap'>
                                    <i class="fa-brands fa-bootstrap fs-1 mb-2"></i>
                                    <p>Bootstrap</p>
                                </div>
                                <div className='figma'>
                                    <i class="fa-brands fa-figma fs-1 mb-2"></i>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </Zoom>
                    </Col>

                    <Col lg={6} className=''>
                        <Zoom>
                            <div className='experience-info my-5 rounded-4  d-flex'>
                                <div >
                                    <img src={goCode} alt="logo" className='w-75 my-4 rounded-5 ms-3' />
                                </div>
                                <div className='pt-4'>
                                    <h3 className='fw-bold fs-2'>CEO Go Code</h3>
                                    <p className='lead mt-3'>
                                        for Web Site Projects
                                    </p>
                                    <p className='fs-5'>2019 - 2024</p>
                                </div>
                            </div>
                        </Zoom>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience