import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
const imgSrc = [
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/LjYuJc7.jpg",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
  {
    id: 1,
    img: "https://i.imgur.com/m2vLsyv.png",
  },
];

const Gallery_Img = () => {
  const [img, setImg] = useState("");
  console.log(img);
  const [imgData, setImgData] = useState(false);

  const imgClick = (e) => {
    setImg(e);
    setImgData(true);
  };
  const imgClose = () => {
    setImgData(false);
  };
  return (
    <Container className="Gallery_Img">
      <div className={imgData ? "model active" : "model"}>
        <BsXLg className="icon" onClick={imgClose} />
        <img src={img} alt="" />
      </div>
      <Row>
        {imgSrc.map((imgSrc) => (
          <Col md={3}>
            <div className="wrap">
              <div className="tumImg" onClick={() => imgClick(imgSrc.img)}>
                <img src={imgSrc.img} alt="" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery_Img;
