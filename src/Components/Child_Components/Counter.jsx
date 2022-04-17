import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaChild,FaBuffer } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
const Counter = () => {
  const data = [
    {
      img: <FaChild/>,
      countValue: "3600",
      position: "Regular Customer"
    },
    {
      img: <FaBuffer/>,
      countValue: "420",
      position: "Sold Products"
    },
    {
      img: <BiWorld/>,
      countValue: "130",
      position: "Store In World"
    },
    {
      img: <MdOutlineProductionQuantityLimits/>,
      countValue: "1600",
      position: "Receive Products"
    }
  ];

  return (
    <div className="Counter">
      <Container>
        <Row>
            {data.map((data)=>(
                 <Col md={3} xs={6}>
                     <div className="wrap">
                        <div className="icon">
                            <span>
                            {data.img}
                            </span>
                            </div>
                        <h2>{data.countValue}</h2>
                        <p>{data.position}</p>

                     </div>
                 </Col>
            ))}
         
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
