import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import { BsCartPlusFill, BsSearch } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";

const Header = () => {
  return (
    <div className="Menu">
      <Container>
        <Row>
          <Col>
            <div class="stellarnav">
              <a href="/" className="logo">
                <img src={logo} alt="" />
              </a>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>

                <li class="drop-right">
                  <a href="">Page</a>
                  <ul>
                    <li>
                      <a href="/shop-page">Shop Page</a>
                    </li>
                    <li>
                      <a href="/cart">Cart</a>
                    </li>
                    <li>
                      <a href="/single-blog">Single Blog</a>
                    </li>
                    
                  </ul>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
			<span className="menu_icon">
			
			  <Link><BsSearch/></Link>
			  <Link><GrUserManager/></Link>
			  <Link> <MdFavorite/></Link>

			  <Link className="count_Cart">  <BsCartPlusFill/> <span className="count_zone">5</span></Link>
			 
			
			</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
