import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact_Bar = () => {
    return (
        <div className='Contact_Bar text-center'>
            <Row>
                <Col>
                        <h2>HAVE A PROJECT ? GET IN TOUCH WITH US</h2>
                        <div className='mt-20'>
                            <Link className='my-btn-primary-outline'>CONTACT US</Link>
                        </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact_Bar;