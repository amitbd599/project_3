import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_1 from '../../Assets/img/img-15.png'
import img_2 from '../../Assets/img/about-big.jpg'
import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const InvestBord = () => {
  return (
    <Container className="InvestBord">
      <Row>
        <Col md={6} className="part_1">
          <div className="wrap">
            <div className="imageFile">
              <img className="left_image" src={img_1} alt="" />
            </div>
          </div>
        </Col>
        <Col md={6} className="part_2">
          <div className="wrap">
            <h2>We help clients invent their <span className="theme-primary-color">Future.</span></h2>
            <p>
              Starkers pardon you knees up is Elizabeth geeza Why, quain gosh
              standard guvnor cras brilliant.
            </p>
          </div>
          <div className="mt-20">
            <ul>
              <li> 
                <p > <FaChevronCircleRight className="mr-5 theme-primary-color"/> Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat.</p>
              </li>
              <li> 
                <p > <FaChevronCircleRight className="mr-5 theme-primary-color"/> Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus.</p>
              </li>
              <li> 
                <p > <FaChevronCircleRight className="mr-5 theme-primary-color"/> Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat.</p>
              </li>
              <li> 
                <p > <FaChevronCircleRight className="mr-5 theme-primary-color"/> Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus.</p>
              </li>
            </ul>
          </div>
          <div className="d-flex mt-20 counting">
            <div>
              <h2>6 +</h2>
              <p>Country</p>
            </div>
            <div>
              <h2>14 +</h2>
              <p>Business Holder</p>
            </div>
            <div>
              <h2>200 +</h2>
              <p>Employee</p>
            </div>
          </div>
          <div className="mt-30">
            <Link to={'/'} className="my-btn-primary">Read More</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvestBord;
