import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../Assets/img/Product/product_1.jpg";
import img_overflow from "../../Assets/img/Product/product_1_overlay.jpg";
import { BsCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiTwotoneCopy } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
const New_Peoduct = () => {
  return (
    <Container className="New_Peoduct">
      <Row>
        <Col>
          <div className="wrap text-center">
            <h2>New Products</h2>
          </div>
        </Col>
      </Row>

      <Row className="mt-100">
        <Col md={3}>
          <div className="wrap">
            <div className="image">
              <img src={img} alt="" />
              <div>
                <p className="text">
                  $ 12
                </p>
                <p className="shape">
                  On Sale!
                </p>
                <div className="iconPart">
                  <Link to={"/"}>
                    {" "}
                    <MdFavorite className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiTwotoneCopy className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BiShow className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BsCartPlusFill className="icon" />
                  </Link>
                </div>
                <img className="img_overflow" src={img_overflow} alt="" />
              </div>
            </div>
            <div className="starIcon mt-10">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
            <Link className="heading_text">Roadies rd-2022</Link>
            <p>$ 120 </p>
            <div className="dot_point d-flex mt-10">
              <div className="dot_color red"></div>
              <div className="dot_color green"></div>
              <div className="dot_color black"></div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap">
            <div className="image">
              <img src={img} alt="" />
              <div>
                <p className="text">
                  $ 12
                </p>
                <p className="shape">
                  On Sale!
                </p>
                <div className="iconPart">
                  <Link to={"/"}>
                    {" "}
                    <MdFavorite className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiTwotoneCopy className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BiShow className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BsCartPlusFill className="icon" />
                  </Link>
                </div>
                <img className="img_overflow" src={img_overflow} alt="" />
              </div>
            </div>
            <div className="starIcon mt-10">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
            <Link className="heading_text">Roadies rd-2022</Link>
            <p>$ 120 </p>
            <div className="dot_point d-flex mt-10">
              <div className="dot_color red"></div>
              <div className="dot_color green"></div>
              <div className="dot_color black"></div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap">
            <div className="image">
              <img src={img} alt="" />
              <div>
                <p className="text">
                  $ 12
                </p>
                <p className="shape">
                  On Sale!
                </p>
                <div className="iconPart">
                  <Link to={"/"}>
                    {" "}
                    <MdFavorite className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiTwotoneCopy className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BiShow className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BsCartPlusFill className="icon" />
                  </Link>
                </div>
                <img className="img_overflow" src={img_overflow} alt="" />
              </div>
            </div>
            <div className="starIcon mt-10">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
            <Link className="heading_text">Roadies rd-2022</Link>
            <p>$ 120 </p>
            <div className="dot_point d-flex mt-10">
              <div className="dot_color red"></div>
              <div className="dot_color green"></div>
              <div className="dot_color black"></div>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap">
            <div className="image">
              <img src={img} alt="" />
              <div>
                <p className="text">
                  $ 12
                </p>
                <p className="shape">
                  On Sale!
                </p>
                <div className="iconPart">
                  <Link to={"/"}>
                    {" "}
                    <MdFavorite className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <AiTwotoneCopy className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BiShow className="icon" />
                  </Link>
                  <Link to={"/"}>
                    {" "}
                    <BsCartPlusFill className="icon" />
                  </Link>
                </div>
                <img className="img_overflow" src={img_overflow} alt="" />
              </div>
            </div>
            <div className="starIcon mt-10">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
            <Link className="heading_text">Roadies rd-2022</Link>
            <p>$ 120 </p>
            <div className="dot_point d-flex mt-10">
              <div className="dot_color red"></div>
              <div className="dot_color green"></div>
              <div className="dot_color black"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default New_Peoduct;
