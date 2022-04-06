import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterSquare, AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
const About_OurTeam = () => {
  const data = [
      { name: "Rosa Lima", position: "CEO", img:"https://i.ibb.co/9scHSry/image.png" },
  { name: "Maria Joha", position: "Product Manager", img:"https://i.ibb.co/yBKzGBR/image.png" },
  { name: "Moni Rota", position: "Senior Designer", img:"https://i.ibb.co/YXPr2k9/image.png" },
  { name: "Katrina Lava", position: "Online Service", img:"https://i.ibb.co/L8T3KM4/image.png" },
];
  return (
    <div className="About_OurTeam">
      <Container>
        <Row className="part_1">
          <Col>
            <div className="wrap">
              <h2>Our Team</h2>
              <p>
                Spectacles are now so common that we regard them as an everyday
                item, we take them for granted and we rarely pay them a second
                glance.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="part_2">
        
          {data.map((data)=>(
                <Col md={3}>
              <div className="wrap">
              <div className="item">
                <div className="imgFile">
                  <img src={data.img} alt="" />
                  <div className="icon">
                    <Link>   <FaFacebook/> </Link>
                    <Link>   <AiFillTwitterSquare/> </Link>
                    <Link>   <AiFillLinkedin/> </Link>
                    <Link>   <AiFillInstagram/> </Link>
                  </div>
                </div>

                <h3>{data.name}</h3>
                <p>{data.position}</p>
              </div>
            </div>
            </Col>
          ))}
            
          
        </Row>
      </Container>
    </div>
  );
};

export default About_OurTeam;
