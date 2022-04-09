import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../Assets/img/Product/product_1.jpg";
import img_overflow from "../../Assets/img/Product/product_1_overlay.jpg";
import { BsCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiTwotoneCopy } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoEyeClosed } from "react-icons/go";
const New_Peoduct = () => {
  const [product, setProduct] = useState([]);
  const [viewImg, setViewImg] = useState(false);
  const [activeImg, setActiveImg] = useState("");
  console.log(product);
  useEffect(() => {
    const url = "DataBase/ProductData.json";
    axios.get(url).then((res) => setProduct(res.data.slice(0, 8)));
  }, []);

  const viewImgHendel = (e) => {
    setActiveImg(e);
    setViewImg(true);
  };
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
        <div className={viewImg ? "modelActiveImg active" : "modelActiveImg"}>
          <GoEyeClosed className="GoEyeClosed" onClick={()=>setViewImg(false)}/>
          <img src={activeImg} alt="" />
        </div>

        {product.map((data) => (
          <Col md={3} className="mb-100">
            <div className="wrap">
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
                      <BiShow
                        className="icon"
                        onClick={() => viewImgHendel(data.img_Overlay)}
                      />
                    </Link>
                    <Link to={"/"}>
                      {" "}
                      <BsCartPlusFill className="icon" />
                    </Link>
                  </div>
                  <img className="img_overflow" src={data.img_Overlay} alt="" />
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
              <p>${data.price}</p>
              <div className="dot_point d-flex mt-10">
                <div className="dot_color red"></div>
                <div className="dot_color green"></div>
                <div className="dot_color black"></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default New_Peoduct;
