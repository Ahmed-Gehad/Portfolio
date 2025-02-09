import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='text-white '>
            <Container>
                <Row className='py-3 '>
                    <Col lg={12} sm={12} xs={12} className='d-flex justify-content-between align-items-center'>
                        <div className='copyright  pt-4 '>
                            <p  className='fs-5'>
                                &copy; 2024 copyright:
                                <span className='text-orange fw-bold ps-1'>Ahmed Gehad </span>
                            </p>
                        </div>
                        <div className='social-media  d-flex  '>
                            <a href='https://www.facebook.com/ahmed.gehad.545/' target='_blank' rel='noreferrer' className=''><i className="fa-brands fa-facebook-f m-2 text-center"></i></a>
                            <a href='https://www.instagram.com/ahmed.gehad.545/' target='_blank' rel='noreferrer' className=''><i className="fa-brands fa-instagram m-2"></i></a>
                            <a href='https://www.linkedin.com/in/ahmedgehad1' target='_blank' rel='noreferrer' className=''><i className="fa-brands fa-linkedin-in m-2"></i></a>
                            <a href='https://github.com/Ahmed-Gehad' target='_blank' rel='noreferrer' className=''><i className="fa-brands fa-github m-2"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
