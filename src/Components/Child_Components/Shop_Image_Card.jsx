import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shop_Image_Card = (props) => {
  const {title_1, title_2, discount_1, discount_2, img_1, img_2}=props;
  return (
    <div>
      <Container className="Shop_Image_Card">
      <Row>
        <Col md={6}>
          <div className="wrap">
           <div className="img"> <img src={img_1} alt="" /></div>
            <h4 className="headText_1">Sale Up To {discount_1} Discount</h4>
            <h3 className="headText_2">{title_1}</h3>

            <div className="mt-20">
            <Link className="my_button">SHOP NOW</Link>
            </div>
          </div>
        </Col>
        <Col md={6} className="mt-100">
          <div className="wrap">
           <div className="img"> <img src={img_2} alt="" /></div>
            <h4 className="headText_1">Sale Up To {discount_2} Discount</h4>
            <h3 className="headText_2">{title_2}</h3>

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
