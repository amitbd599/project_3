import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import { BsCartPlusFill, BsSearch } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";
const Header = () => {

  // Scroll navbar

  window.addEventListener("scroll",()=>{
    const Menu = document.querySelector(".Menu");
    Menu.classList.toggle("sticky", window.scrollY>150);
  })

  // const style = () => {
  //   return (
  //     <style jsx>{`
  //       .nav {
  //         transition: all 0.1s linear;
  //         position: fixed;
  //         z-index: 2000;
  //         padding: 20px 0;
  //         width: 100%;
  //       }
  //       .scrollNav {
  //         transition: all 0.5s ease-in;
  //         z-index: 2000;
  //         background: #ffffff;
  //         width: 100%;
  //         padding: 10px 0;
  //         border-bottom: 1px solid #dddddd;
  //       }
  //       .styl {
  //         padding-top: 180px;
  //       }
  //     `}</style>
  //   );
  // };
  return (
    <div className="Menu">
        <Navbar className="w-100" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              {" "}
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About Us
                </Nav.Link>
                <NavDropdown title="Page" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"Shop-Page"}>
                    Shop Page
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/cart"}>
                    Cart Page
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"single-blog"}>
                    Single Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/gallery"}>
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/faq"}>
                    FAQ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/blog"}>
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact Us
                </Nav.Link>
              </Nav>
              <span className="menu_icon">
                <Link>
                  <BsSearch />
                </Link>
                <Link>
                  <GrUserManager />
                </Link>
                <Link>
                  {" "}
                  <MdFavorite />
                </Link>

                <Link className="count_Cart">
                  {" "}
                  <BsCartPlusFill /> <span className="count_zone">5</span>
                </Link>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
};

export default Header;
