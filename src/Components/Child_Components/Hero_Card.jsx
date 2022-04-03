import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TiChartBarOutline } from "react-icons/ti";
const Hero_Card = () => {
    return (
        <Container className='Hero_Card'>
           <Row>
               <Col md={4}>
               <div className="wrap">
                   <TiChartBarOutline className='icon'/>
                <h2>City Traffic & Parking</h2>
                <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
               </Col>
               <Col md={4}>
               <div className="wrap">
                   <TiChartBarOutline className='icon'/>
                <h2>Parks, Fields & Recreation</h2>
                <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
               </Col>
               <Col md={4}>
               <div className="wrap">
                   <TiChartBarOutline className='icon'/>
                <h2>Sports & Fitness Center</h2>
                <p class="description">
                Efficiently orchestrate resource sucking human capital whereas
                future-proof outsourcing. Credibly actualize one-to-one
                meta-services.
              </p>
            </div>
               </Col>
           </Row>
        </Container>
    );
};

export default Hero_Card;