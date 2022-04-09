import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowsAltH } from "react-icons/fa";
const FaqData = () => {
  const [active, setActive] = useState(false);

  const toggle = (e) => {
    console.log(e);
    setActive(!active);
  };
  return (
    <div className="FaqData">
      <Container>
        <Row className="part_1">
          <Col>
            <div className="wrap text-center">
              <h2>How can we help?</h2>
              <p>Ask a question or describe the problem you are facing.​​</p>
            </div>
            <hr />
          </Col>
        </Row>
        <Row className="part_2">
          <Col md={12}>
            <div className="wrap text-center">
              <h2>Help Guides</h2>
            </div>
          </Col>
          <Col md={3} className="faq_link">
            <ul>
              <li>
                <p>CRM & Help Desk</p>
              </li>
              <li>
                <Link>Eleifend tellus</Link>
              </li>
              <li>
                <Link>Consequat vitae</Link>
              </li>
              <li>
                <Link>Cras dapibus</Link>
              </li>
              <li>
                <Link>Vamus elementum</Link>
              </li>
              <li>
                <Link>Dictum felis eu</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="faq_link">
            <ul>
              <li>
                <p>CRM & Help Desk</p>
              </li>
              <li>
                <Link>Eleifend tellus</Link>
              </li>
              <li>
                <Link>Consequat vitae</Link>
              </li>
              <li>
                <Link>Cras dapibus</Link>
              </li>
              <li>
                <Link>Vamus elementum</Link>
              </li>
              <li>
                <Link>Dictum felis eu</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="faq_link">
            <ul>
              <li>
                <p>CRM & Help Desk</p>
              </li>
              <li>
                <Link>Eleifend tellus</Link>
              </li>
              <li>
                <Link>Consequat vitae</Link>
              </li>
              <li>
                <Link>Cras dapibus</Link>
              </li>
              <li>
                <Link>Vamus elementum</Link>
              </li>
              <li>
                <Link>Dictum felis eu</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="faq_link">
            <ul>
              <li>
                <p>CRM & Help Desk</p>
              </li>
              <li>
                <Link>Eleifend tellus</Link>
              </li>
              <li>
                <Link>Consequat vitae</Link>
              </li>
              <li>
                <Link>Cras dapibus</Link>
              </li>
              <li>
                <Link>Vamus elementum</Link>
              </li>
              <li>
                <Link>Dictum felis eu</Link>
              </li>
            </ul>
          </Col>
          <Col md={12} className="mt-100">
            <div className="wrap text-center">
              <h2>Popular Questions</h2>
            </div>
          </Col>
          <Col md={12} className=" Accordion ">
            <div className="wrap text-start">
              <h2 className="">Account Questions</h2>
              <div className="accBody mt-25">
                <div className="textBody">
                  <div className="textFile">
                    <span onClick={toggle}>
                      <FaArrowsAltH className="icon mr-15" />
                    </span>

                    <span className="text">
                      Eleifend option congue nihil imperdiet ?{" "}
                    </span>
                    <p
                      className={active ? "toggle_text active" : "toggle_text"}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Est expedita numquam excepturi doloribus quibusdam
                      exercitationem aut, asperiores dolores rem nisi pariatur
                      vero praesentium laborum eos unde recusandae fugit
                      consectetur ad!
                    </p>
                  </div>
                </div>
                <div className="textFile">
                  <span id="3" onClick={(e) => toggle(e.target.value)}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
                <div className="textFile">
                  <span onClick={toggle}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
                <div className="textFile">
                  <span onClick={(e) => toggle(e.target)}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="wrap text-start mt-40">
              <h2 className="">Account Questions</h2>
              <div className="accBody mt-25">
                <div className="textBody">
                  <div className="textFile">
                    <span onClick={toggle}>
                      <FaArrowsAltH className="icon mr-15" />
                    </span>

                    <span className="text">
                      Eleifend option congue nihil imperdiet ?{" "}
                    </span>
                    <p
                      className={active ? "toggle_text active" : "toggle_text"}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Est expedita numquam excepturi doloribus quibusdam
                      exercitationem aut, asperiores dolores rem nisi pariatur
                      vero praesentium laborum eos unde recusandae fugit
                      consectetur ad!
                    </p>
                  </div>
                </div>
                <div className="textFile">
                  <span id="3" onClick={(e) => toggle(e.target.value)}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
                <div className="textFile">
                  <span onClick={toggle}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
                <div className="textFile">
                  <span onClick={(e) => toggle(e.target)}>
                    <FaArrowsAltH className="icon mr-15" />
                  </span>

                  <span className="text">
                    Eleifend option congue nihil imperdiet ?{" "}
                  </span>
                  <p className={active ? "toggle_text active" : "toggle_text"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est expedita numquam excepturi doloribus quibusdam
                    exercitationem aut, asperiores dolores rem nisi pariatur
                    vero praesentium laborum eos unde recusandae fugit
                    consectetur ad!
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqData;
