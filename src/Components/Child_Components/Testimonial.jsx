import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Testimonial = () => {
  
  const [data, setData]= useState([]);
  useEffect(()=>{
    const url ='/DataBase/Testimonial.json'
    axios.get(url)
    .then((res)=>setData(res.data))
  },[])
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

                  {
                    data.map((data)=>(
                      <div className="wrap">
                  <FaQuoteLeft className="FaQuoteLeft" />
                  <p>
                    {data.des}
                  </p>
                  <div className="d-flex mt-20">
                    <div className="imgBar">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="ml-20">
                    <Link className="name d-block">{data.name}</Link>
                    <span>{data.position}</span>
                    </div>
                  </div>
                </div>
                    ))
                  }

                
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
