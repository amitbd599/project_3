import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleMapCustomApi from "./GoogleMapCustomApi";
import { FaAddressCard, FaPhoneSquareAlt,FaVoicemail,FaBusinessTime } from "react-icons/fa";
const ContactData = () => {
  return (
    <Container className="mt-100 mb-100">
      <Row>
        <Col>
          <GoogleMapCustomApi></GoogleMapCustomApi>
        </Col>
      </Row>
      {/* Contact Form */}
      <Row className="contactForm">
        <Col md={6} className="part_1">
          <div className="wrap">
            <h2>Contact Details :</h2>
            <div className="textBar">
              <p className="headText"> <FaAddressCard className="icon"/> Address :</p>
              <p>60, 29th Street #343, San Francisco, CA 94110, United State</p>
              <hr />
            </div>
            <div className="textBar">
              <p className="headText"><FaPhoneSquareAlt className="icon"/> Hotline :</p>
              <p>0000-456-7892 / 1800-222-7560</p>
              <hr />
            </div>
            <div className="textBar">
              <p className="headText"><FaVoicemail className="icon"/> Email Us :</p>
              <p>admin@amitjs.com</p>
              <hr />
            </div>
            <div className="textBar">
              <p className="headText"> <FaBusinessTime className="icon"/> Opening Time :</p>
              <p>8:00Am – 10:00Pm, Sunday Close</p>
            </div>
          </div>
        </Col>
        <Col md={6} className="part_2">
          <div className="wrap">
            <h2>Send Us A Message :</h2>
            <div className="mainContactForm">
              <Form>
              <div className="d-flex">
                  <Form.Control
                    className="mr-10"
                    type="text"
                    placeholder="Name *"
                  />{" "}
                  <Form.Control
                    className="ml-10"
                    type="email"
                    placeholder="E-mail *"
                  />
                 
                </div>
                <Form.Control
                    className="mt-30" 
                    type="text"
                    placeholder="Subject *"
                  />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Group
                  className="mt-30"
                  controlId="exampleForm.ControlTextarea1"
                  
                >
                  
                  <Form.Control as="textarea" rows={4}  placeholder="Your Message *"/>
                </Form.Group>

                
                <Form.Group>
                  <div className="myBtn mt-30">
                    <Link className="my-btn-primary" type="submit">
                      Send
                    </Link>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactData;
