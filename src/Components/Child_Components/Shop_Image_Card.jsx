import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_1 from "../../Assets/img/sub-banner-1.jpg";
import img_2 from "../../Assets/img/sub-banner-2 (1).jpg";

const Shop_Image_Card = () => {
  return (
    <div>
      <Container className="Shop_Image_Card">
      <Row>
        <Col md={6}>
          <div className="wrap">
           <div className="img"> <img src={img_1} alt="" /></div>
            <h4 className="headText_1">Sale Up To 30% Discount</h4>
            <h3 className="headText_2">Matt Brown Sunglasses</h3>

            <div className="mt-20">
            <Link className="my_button">SHOP NOW</Link>
            </div>
          </div>
        </Col>
        <Col md={6} className="mt-100">
          <div className="wrap">
           <div className="img"> <img src={img_2} alt="" /></div>
            <h4 className="headText_1">Sale Up To 20% Discount</h4>
            <h3 className="headText_2">Black Polarized Sunglasses</h3>

            <div className="mt-20">
            <Link className="my_button">SHOP NOW</Link>
            </div>
          </div>
        </Col>
      </Row>
     
    </Container>
  
    </div>
  );
};

export default Shop_Image_Card;
