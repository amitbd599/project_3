import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const SideBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "DataBase/BlogData.json";
    axios.get(url).then((res) => setData(res.data));
  }, []);
  const comments = [
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
  ];
  return (
    <div className="wrap">
      {/* Search Bar */}
      <div className="searchBar">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <BsSearch className="icon" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      <hr />
      {/* Recent post */}
      <div className="reacentPost">
        <h2>Recent Posts</h2>
        {data.map((data) => (
          <div className="item">
            <Link>{data.title}</Link>
          </div>
        ))}
        <hr />
      </div>
      {/* Recent Comment */}
      <div className="recentComment">
        <div className="comments">
          <h2>Recent Comments</h2>
          {comments.map((comment) => (
            <p className="text">
              <span className="icon mr-10">
                <FaComment />
              </span>
              <Link>Admin </Link>
              on
              {` ${comment.comment}`}
            </p>
          ))}
        </div>
        <hr />
      </div>
      {/* Archives */}
      <div className="archives">
        <div className="comments">
          <h2>Recent Comments</h2>
          <ul>
            <li>
              <Link>January 2022</Link>
            </li>
            <li>
              <Link>July 2021</Link>
            </li>
            <li>
              <Link>March 2021</Link>
            </li>
            <li>
              <Link>January 2020</Link>
            </li>
            <li>
              <Link>September 2020</Link>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      {/* Categories */}
      <div className="Categories">
        <div className="comments">
          <h2>Categories</h2>
          <ul>
            <li>
              <Link>Contact Lanses</Link>
            </li>
            <li>
              <Link>Eye Care</Link>
            </li>
            <li>
              <Link>Expertise</Link>
            </li>
            <li>
              <Link>Eye Glasses</Link>
            </li>
            <li>
              <Link>Spectacles</Link>
            </li>
            <li>
              <Link>Sunglasses</Link>
            </li>
            <li>
              <Link>Vision Tips</Link>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      {/* Meta */}
      <div className="Meta">
        <div className="comments">
          <h2>Meta</h2>
          <ul>
            <li>
              <Link>Log in</Link>
            </li>
            <li>
              <Link>Entries feed</Link>
            </li>
            <li>
              <Link>Comments feed</Link>
            </li>
            <li>
              <Link>Top Products</Link>
            </li>
            <li>
              <Link>Top Sales</Link>
            </li>
            <li>
              <Link>Free Shipping</Link>
            </li>
            <li>
              <Link>Vision Tips</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
