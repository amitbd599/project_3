import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdDataExploration } from "react-icons/md";
import { FaCcMastercard, FaMoneyBillAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
const Intro = () => {
    return (
        <Container className='Intro'>
            <Row className='part_1'>
                <Col>
                    <h2>What you can do</h2>
                    <p>The full monty spiffing good time no biggie cack grub fantastic.</p>
                </Col>
            </Row>
            <Row className='part_2'>
                <Col md={3}>
                    <div className="wrap">
                        <MdDataExploration className='icon'/>
                        <h2>Easy to use</h2>
                        <p>Mucker plastered bugger all mate morish are.</p>
                        <Link className='my_button'>Read More</Link>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="wrap bg-color">
                        <FaCcMastercard className='icon'/>
                        <h2>Paid to Card</h2>
                        <p>Mucker plastered bugger all mate morish are.</p>
                        <Link className='my_button'>Read More</Link>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="wrap ">
                        <FaMoneyBillAlt className='icon'/>
                        <h2>Payment Secure</h2>
                        <p>Mucker plastered bugger all mate morish are.</p>
                        <Link className='my_button'>Read More</Link>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="wrap bg-color">
                        <IoHomeSharp className='icon'/>
                        <h2>Home Delivery</h2>
                        <p>Mucker plastered bugger all mate morish are.</p>
                        <Link className='my_button'>Read More</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;