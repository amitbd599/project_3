import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiTwotoneCopy } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const Shop_Page_products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "DataBase/ProductData.json";
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="Shop_Page_products New_Peoduct">
      <Container>
        <Row>
          <Col md={2} className="part_1">
            <div className="wrap">
              <div className="headingText">
                <h2>CATEGORIES</h2>
              </div>
              <div className="listCategories">
                <ul>
                  <li>
                    <Link>Cat Eye</Link>
                  </li>
                  <li>
                    <Link>Rectangle</Link>
                  </li>
                  <li>
                    <Link>Round</Link>
                  </li>
                  <li>
                    <Link>Shield</Link>
                  </li>
                  <li>
                    <Link>Square</Link>
                  </li>
                  <li>
                    <Link>Wayfarer</Link>
                  </li>
                  <li>
                    <Link>Men</Link>
                  </li>
                  <li>
                    <Link>Women</Link>
                  </li>
                  <li>
                    <Link>Macs</Link>
                  </li>
                  <li>
                    <Link>Progressives</Link>
                  </li>
                  <li>
                    <Link>Frame</Link>
                  </li>
                  <li>
                    <Link>Trifocals</Link>
                  </li>
                  <li>
                    <Link>Bifocals</Link>
                  </li>
                </ul>
              </div>
              {/* Show Range */}
            <div className="range">
            <Slider range min={-10}   defaultValue={[10, 45]} />
            </div>
            </div>
          </Col>

          <Col md={10} className="part_2">
            {/* Short By Items */}
            <DropdownButton id="dropdown-basic-button" title="Short By">
              <Dropdown.Item href="#/action-1">Short By Name</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Short By Price</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Short By Date</Dropdown.Item>
            </DropdownButton>

            

            <div className="allItem">
              {data.map((data) => (
                <div className="wrap">
                  <div className="">
                    <div className="image">
                      <img src={data.img} alt="" />
                      <div>
                        <p className="text">$ {data.discount}</p>
                        <p className="shape">On Sale!</p>
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
                        <img
                          className="img_overflow"
                          src={data.img_Overlay}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="starIcon mt-10">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                    </div>
                    <Link className="heading_text">{data.title}</Link>
                    <p>$ {data.price}</p>
                    <div className="dot_point d-flex mt-10">
                      <div className="dot_color red"></div>
                      <div className="dot_color green"></div>
                      <div className="dot_color black"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop_Page_products;
