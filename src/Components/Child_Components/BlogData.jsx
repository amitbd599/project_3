import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
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
              </div>
            ))}
          </Col>
          <Col md={3} className="part_2">
            <div className="wrap">
              <div className="searchBar">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                   <BsSearch className="icon"/>
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <hr />
              <div className="reacentPost">
                <h2>Recent Posts</h2>
                {data.map((data) => (
                  <div className="item">
                    <Link>{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogData;
