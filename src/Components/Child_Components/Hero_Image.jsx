import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import imgBlog from "../../Assets/img/leader-01.webp";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
const Hero_Image = () => {
  return (
    <div className="Hero_Image">
      <>
        <Row>
          <Col md={6} className="relative">
            <img src={imgBlog} alt="" />
            <TiArrowRight className="TiChartPie"></TiArrowRight>
          </Col>

          <Col md={6}>
            <div className="wrap">
              <h3>Our Party Visions</h3>
              <h2>Join The Fight for Our Freedom</h2>
              <p>
                Every pleasures is to welcomed pain avoided owing to the duty
                the obligations of business it will frequently occur that
                pleasures have to.
              </p>
              <br />
              <p>
                How all this mistaken idea of denouncing pleasure and praising
                pain was born & we will give you a complete account of the
                system.
              </p>
              <div className="d-flex mt-15">
                <div>
                  <h2 className="theme-primary-color ">99.8%</h2>
                </div>

                <div className="ml-20 mb-30">
                  <p className="theme-primary-color">Positive Feedback</p>
                  <p className="theme-primary-color">From Peoples</p>
                </div>
              </div>
              <Link  to={'/'} className="my-btn-primary">Read More Us</Link>
            </div>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Hero_Image;
