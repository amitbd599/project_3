import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Testimonial = () => {
  // const breakPoints = [
  //     { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  //     { width: 1450, itemsToShow: 3 }

  //   ]
  return (
    <div className="Testimonial">
      <Row className="part_1 text-center">
        <Col>
          <div className="wrap">
            <h2>Stories From Our Customers</h2>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis a libero tempus, blandit and cursus varius and magnis
              sapien
            </p>
          </div>
        </Col>
      </Row>
      <Container>
        <Row className="part_2">
          <Col>
            <div className="">
              <Carousel
                breakPoints={[
                  { width: 1, itemsToShow: 1 },
                  { width: 600, itemsToShow: 3 },
                ]}
              >
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Amit Biswas</Link>
                </div>
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Alex Jon</Link>
                </div>
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Maria Lusa</Link>
                </div>
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Luma Route</Link>
                </div>
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Catrtna RX</Link>
                </div>
                <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error porro, itaque hic quidem corporis, iure voluptates vel
                    qui quae architecto dolore voluptatum dolores provident
                    explicabo consequuntur sequi necessitatibus odit numquam
                    officia pariatur odio est cupiditate natus. Hic asperiores
                    laudantium nesciunt aspernatur, vel facilis est tempore
                    explicabo nam ex, in accusantium!
                  </p>
                  <Link className="name">Donat Mola</Link>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
