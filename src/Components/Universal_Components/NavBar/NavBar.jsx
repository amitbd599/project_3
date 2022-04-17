import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../../../Assets/img/logo.png";
import {
  Col,
  Container,
  Dropdown,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import {
  BsTwitter,
  BsFillArrowDownCircleFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const NavBar = () => {
  const [money, setMoney] = useState("USD");
  const [lan, setLan] = useState("English");
  const [activeMoney, setActiveMoney] = useState(true);
  const [activeLan, setActiveLan] = useState(true);
  const hendelClickMoney = (e) => {
    setMoney(e);
  };
  const hendelClickLan = (e) => {
    setLan(e);
  };

  const hideOptionMoney = () => {
    setActiveMoney(!activeMoney);
  };
  const hideOptionLan = () => {
    setActiveLan(!activeLan);
  };

  // Show second Navbar
  window.addEventListener("scroll", () => {
    const scroll = document.querySelector("#stickyDownMenu");
    scroll.classList.toggle("sticky", window.scrollY > 300);
  });

  return (
    <div className="Menu" id="Menu">
      <header>
        <div className="topHeader">
          <Container>
            <Row>
              <Col>
                <div className="topHeaderWrapPart_1">
                  <div className="iconData">
                    <AiFillFacebook className="topIcon" />
                    <AiOutlineTwitter className="topIcon" />
                    <AiFillInstagram className="topIcon" />
                    <AiFillLinkedin className="topIcon" />
                  </div>
                  <div className="textMain">
                    <Link className="text-light">
                      FREE SHIPPING OVER $200. INTERNATIONAL SHIPPING AVAILABLE.
                    </Link>
                  </div>
                  <div className="selectedData">
                    <div className="moneyMain ">
                      <div
                        className="moneyType"
                        onClick={() => setActiveMoney(!activeMoney)}
                      >
                        <p className="text-light mr-10">{money}</p>
                        <BsFillArrowDownCircleFill className="text-light icon" />
                      </div>
                      <ul
                        id="list"
                        className={activeMoney ? " active" : ""}
                        onClick={hideOptionMoney}
                      >
                        <li
                          onClick={(e) => hendelClickMoney(e.target.innerHTML)}
                        >
                          USD
                        </li>
                        <li
                          onClick={(e) => hendelClickMoney(e.target.innerHTML)}
                        >
                          RS
                        </li>
                        <li
                          onClick={(e) => hendelClickMoney(e.target.innerHTML)}
                        >
                          BDT
                        </li>
                      </ul>
                    </div>
                    <span className="text-light">||</span>
                    <div className="lanMain">
                      <div
                        className="lanType"
                        onClick={() => setActiveLan(!activeLan)}
                      >
                        <p className="text-light mr-10">{lan}</p>
                        <BsFillArrowDownCircleFill className="text-light" />
                      </div>
                      <ul
                        id="list"
                        className={activeLan ? " active" : ""}
                        onClick={hideOptionLan}
                      >
                        <li onClick={(e) => hendelClickLan(e.target.innerHTML)}>
                          English
                        </li>
                        <li onClick={(e) => hendelClickLan(e.target.innerHTML)}>
                          Hindi
                        </li>
                        <li onClick={(e) => hendelClickLan(e.target.innerHTML)}>
                          Spanish
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Heading logo Part_2 */}
        <div className="topHeaderWrapPart_2">
          <Container>
            <Row className="d-flex justify-content-between">
              <Col>
                <InputGroup className="mb-3 searchBar">
                  <FormControl
                    className="w-50"
                    placeholder="Search Point!"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <Link>
                      {" "}
                      <BiSearchAlt2 />
                    </Link>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col>
                <div className="logo text-center">
                 <Link to={'/'}> <img src={logo} alt="" /></Link>
                </div>
              </Col>
              <Col>
                <div className="loginInfo text-end">
                  <Link className="icon">
                    {" "}
                    <AiOutlineUser />{" "}
                  </Link>
                  <Link className="icon">
                    {" "}
                    <MdOutlineFavoriteBorder />{" "}
                  </Link>
                  <Link className="icon">
                    {" "}
                    <BsFillCartCheckFill />{" "}
                  </Link>
                  <Link className="icon">
                    {" "}
                    <FaBars />{" "}
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Heading Menu Part_3 */}
        <div className="topHeaderWrapPart_3 ">
          
                <div className="">
                  {/* <Link to={"/"} className="logo">
                    <img src={logo} alt="" />
                  </Link> */}
                  <input type="checkbox" id="menuBar" />
                  <label htmlFor="menuBar"><FaBars /></label>
                  <nav className="mainNavBar">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          className={
                            window.location.pathname === "/" && "active"
                          }
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className={
                            window.location.pathname === "/about" && "active"
                          }
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link>Page +</Link>
                        <ul>
                          <li>
                            <Link
                              to={"/Shop-Page"}
                              className={
                                window.location.pathname === "/Shop-Page" &&
                                "active"
                              }
                            >
                              Shop Page
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/cart"}
                              className={
                                window.location.pathname === "/cart" && "active"
                              }
                            >
                              Cart Page
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/single-blog"}
                              className={
                                window.location.pathname === "/single-blog" &&
                                "active"
                              }
                            >
                              Single Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/gallery"}
                              className={
                                window.location.pathname === "/gallery" &&
                                "active"
                              }
                            >
                              Gallery
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/faq"}
                              className={
                                window.location.pathname === "/faq" && "active"
                              }
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to={"/blog"}
                          className={
                            window.location.pathname === "/blog" && "active"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <Link
                          to={"/contact"}
                          className={
                            window.location.pathname === "/contact" && "active"
                          }
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
             
        </div>

        <div className="stickyDownMenu" id="stickyDownMenu">
          <Link to={"/"} className="logo">
            <img src={logo} alt="" />
          </Link>
          <input type="checkbox" id="menuBarDown" />
          <label htmlFor="menuBarDown"><FaBars /></label>
          <nav className="mainNavBar">
            <ul>
              <li>
                <Link
                  to="/"
                  className={window.location.pathname === "/" && "active"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={window.location.pathname === "/about" && "active"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link>Page +</Link>
                <ul>
                  <li>
                    <Link
                      to={"/Shop-Page"}
                      className={
                        window.location.pathname === "/Shop-Page" && "active"
                      }
                    >
                      Shop Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/cart"}
                      className={
                        window.location.pathname === "/cart" && "active"
                      }
                    >
                      Cart Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/single-blog"}
                      className={
                        window.location.pathname === "/single-blog" && "active"
                      }
                    >
                      Single Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/gallery"}
                      className={
                        window.location.pathname === "/gallery" && "active"
                      }
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/faq"}
                      className={
                        window.location.pathname === "/faq" && "active"
                      }
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className={window.location.pathname === "/blog" && "active"}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={
                    window.location.pathname === "/contact" && "active"
                  }
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
