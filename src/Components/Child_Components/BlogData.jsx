import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import SideBar from "./SideBar";
const axios = require("axios");
const BlogData = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const url = "DataBase/BlogData.json";
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <div className="BlogData">
      <Container>
        <Row>
          {" "}
          <Col md={9} className="part_1">
            {data.map((data) => (
              <div className="wrap">
                <div className="img">
                  <img src={data.img} alt="" />
                </div>
                <div className="textBody">
                  <div className="dateSection">
                    <div className="dateData">
                      <span className="icon">
                        <BsCalendar2DateFill />
                      </span>
                      <span className="text">{data.date}</span>
                    </div>
                    <div className="adminBox">
                      <span className="icon">
                        <RiAdminFill />
                      </span>
                      <span className="text">By Admin</span>
                    </div>
                    <div className="commentSection">
                      <span className="icon">
                        <FaComment />
                      </span>
                      <span className="text">5 Comments</span>
                    </div>
                  </div>
                  <div className="textFile">
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>

                    <Link className="my-btn-primary">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={3} className="part_2">
            <SideBar></SideBar>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pagination">
              <div className="wrap">
                <ul>
                  <li>
                    <Link className="item"><AiOutlineArrowLeft/></Link>
                  </li>
                  <li>
                    <Link className="item active">1</Link>
                  </li>
                  <li>
                    <Link className="item">2</Link>
                  </li>
                  <li>
                    <Link className="item">3</Link>
                  </li>
                  <li>
                    <Link className="item">4</Link>
                  </li>
                  <li>
                    <Link className="item">5</Link>
                  </li>
                  <li>
                    <Link className="item"><AiOutlineArrowRight/></Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogData;
