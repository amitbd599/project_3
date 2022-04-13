import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowsAltH } from "react-icons/fa";

const accountQuestions = [
  {
    id: 1,
    title: "Eleifend option congue nihil imperdiet ?",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est expedita numquam excepturi doloribus quibusdam exercitationem aut, asperiores dolores rem nisi pariatur vero praesentium laborum eos unde recusandae fugit consectetur ad!",
  },
  {
    id: 2,
    title: "MongoDb option congue nihil imperdiet ?",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est expedita numquam excepturi doloribus quibusdam exercitationem aut, asperiores dolores rem nisi pariatur vero praesentium laborum eos unde recusandae fugit consectetur ad!",
  },
];
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
        </Row>
        <Row>
          <Col md={12} className=" Accordion ">
            <div className="wrap text-start">
              <h2 className="">Account Questions</h2>
              <div className="accBody mt-25">
                <div className="textBody"></div>
              </div>
            </div>
          </Col>
          <Row>
            <Col md={6}>
              <div className="textFile">
                <input type="checkbox" id="toggle1" className="checkbox" />
                <label className="text" for="toggle1">
                  If you could live anywhere, where would it be? voluptatibus?{" "}
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>

              <div className="textFile">
                <input type="checkbox" id="toggle2" className="checkbox" />
                <label className="text" for="toggle2">
                What would you change about yourself if you could?{" "}
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>
              <div className="textFile">
                <input type="checkbox" id="toggle5" className="checkbox" />
                <label className="text" for="toggle5">
                What is your favorite thing about your career?
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="textFile">
                <input type="checkbox" id="toggle3" className="checkbox" />
                <label className="text" for="toggle3">
                What did you want to be when you were small?
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>

              <div className="textFile">
                <input type="checkbox" id="toggle4" className="checkbox" />
                <label className="text" for="toggle4">
                What would you sing at Karaoke night?
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>
              <div className="textFile">
                <input type="checkbox" id="toggle6" className="checkbox" />
                <label className="text" for="toggle6">
                What two radio stations do you listen to in the car the most?
                </label>
                <p className="toggle_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus deleniti nemo tempora quod, minus quisquam omnis
                  pariatur delectus eaque explicabo adipisci ad officiis
                  excepturi quae qui voluptate, exercitationem odio cumque.
                </p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default FaqData;
