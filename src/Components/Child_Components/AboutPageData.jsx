import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgFile from "../../Assets/img/aboutPageBg.jpg";
import imgFile_1 from "../../Assets/img/aboutPageBg2.jpg";
import imgFile_2 from "../../Assets/img/aboutPageBg3.jpg";
import { BsArrowRightCircleFill } from "react-icons/bs";
const AboutPageData = () => {
  return (
    <div className="AboutPageData">
      <Container>
        <Row className="CompanyInfo">
          <Col md={6} className="part_1">
            <div className="wrap">
              <div className="imgFile">
                <div className="img">
                  <img src={imgFile} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="part_2">
            <div className="wrap">
              <h2>Our Company</h2>
              <h1>The Highest Quality Products</h1>
              <p>
                Monotonectally initiate covalent intellectual capital without
                scalable mindshare. Synergistically recaptiualize maintainable
                users whereas fully tested initiatives. Appropriately create
                superior scenarios for professional services. Holisticly
                envision emerging portal egestas sapien hac urna telluses nam
                pulvinar per luctus ipsum.
              </p>
              <div className="list">
                <ul>
                  <li>
                    <p>
                      {" "}
                      <BsArrowRightCircleFill className="BsArrowRightCircleFill" />{" "}
                      Book an Appointment.
                    </p>
                    <p>
                      {" "}
                      <BsArrowRightCircleFill className="BsArrowRightCircleFill" />{" "}
                      Better Cotton Initiative.
                    </p>
                    <p>
                      {" "}
                      <BsArrowRightCircleFill className="BsArrowRightCircleFill" />{" "}
                      Find your perfect frames.
                    </p>
                    <p>
                      {" "}
                      <BsArrowRightCircleFill className="BsArrowRightCircleFill" />{" "}
                      Get a New Prescription.
                    </p>
                    <p>
                      {" "}
                      <BsArrowRightCircleFill className="BsArrowRightCircleFill" />{" "}
                      Bulk Orders and Gifting.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="myBtn mt-30">
                <Link className="my-btn-primary">Learn More</Link>
                <Link className="my-btn-primary ml-20">View Demo</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mission">
        <Container>
          <Row>
            <Col md={6} className="part_1">
              <div className="wrap">
                <h2>Our Mission</h2>
                <p>
                 Energistically optimize reliable leadership skills and
                  cross-platform internal or "organic" sources. Dramatically
                  restore orthogonal ROI whereas flexib "outside the box"
                  thinking. Uniquely re-engineer top-line methodologies whereas
                  intermandated bandwidth. Authoritatively strategize accurate
                  linkage with tactical
                </p>
                <div className="myBtn">
                  <Link className="my-btn-primary">Get More Info</Link>
                </div>
              </div>
            </Col>
            <Col md={6} className="part_2">
              <div className="wrap">
                <div className="imgFile">
                  <div className="img">
                    <img className="imgFile_1" src={imgFile_1} alt="" />
                    <div className="text">
                      <h2>
                       " SUCCESS USUALLY COMES TO THOSE WHO ARE TOO BUSY TO BE
                        LOOKING FOR IT"
                      </h2>
                      <h5>Amit Biswas</h5>
                      <p>FOUNDER, CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPageData;
