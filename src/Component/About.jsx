import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


import aboutVideo from '../imges/videoframe_1322.png'


import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='about text-white my-5 px-4' id='About'>

            <Container>
                <Row>
                    <Col lg={12} className='text-center '>
                        <h1 className='fw-bold text-orange'>About Me</h1>
                        <div className="line my-4 mx-auto"></div>
                    </Col>
                    <Col lg={7} className='py-4' >
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 1 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 4 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <h1 className='fw-bold py-3'>
                                I'm a Passionate Web Developer
                            </h1>
                            <p className='lead fs-4 w-75'>
                                I'm a developer & designer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.
                            </p>
                        </motion.div>
                    </Col>
                    <Col lg={5} className=''>
                        <motion.div
                            className=""
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: 2 % 2 === 0 ? 50 : -50
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 4 // Animation duration
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <img src={aboutVideo} alt='video' className='w-100 rounded-5 mt-5  h-100 ' />
                        </motion.div>

                    </Col>
                </Row>
            </Container>





















        </div>
    )
}

export default About