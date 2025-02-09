import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InfoContact from './InfoContact'
import MassageContact from './MassageContact'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className='Contact text-white py-5' id='Contact'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center '>
                        <h1 className='text-orange fw-bold'>Get in touch</h1>
                        <div className="darkline my-4 mx-auto"></div>
                    </Col>

                    <Col lg={6} className='pt-5 ps-2'>
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
                        <InfoContact />
                        </motion.div>
                    </Col>

                    <Col lg={6} className='pt-5'>
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
                        <MassageContact />
                        </motion.div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Contact