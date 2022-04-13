import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="wrap">
                <div>
                  <h3>About Us</h3>
                </div>
                <div className="text">
                  <p>
                    Vestibulum orci turpis, dignissim a ipsum at, pharetra
                    interdum erat. Aliquam eget mpus augue. Etiam placerat
                    blandit turpi.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <h3>CONTACT</h3>
              <div className="text">
                <ul>
                  <li>
                    {" "}
                    <HiLocationMarker className="icon" /> 5600 Orangethorpe
                    Avenue, La Palma, CA - 90623
                  </li>
                  <li>
                    <BsFillTelephoneInboundFill className="icon" />{" "}
                    (99)-2536-9630
                  </li>
                  <li>
                    <MdMarkEmailRead className="icon" /> admin@amitjs.com
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <h3>Our Company</h3>
              <div className="text">
                <ul>
                  <li>Delivery</li>
                  <li>Legal Notice</li>
                  <li>Terms and conditions of use</li>
                  <li>About us</li>
                  <li>Secure payment</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="footer_Down">
        <Col>
          <p>Copyright Brand Exponents 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
