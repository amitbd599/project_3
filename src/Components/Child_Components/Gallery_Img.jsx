import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsXLg } from "react-icons/bs";
import img_1 from "../../Assets/img/Gallery/galleryImg(1).jpg";
import img_2 from "../../Assets/img/Gallery/galleryImg (2).jpg";
import img_3 from "../../Assets/img/Gallery/galleryImg (3).jpg";
import img_4 from "../../Assets/img/Gallery/galleryImg (4).jpg";
import img_5 from "../../Assets/img/Gallery/galleryImg (5).jpg";
import img_6 from "../../Assets/img/Gallery/galleryImg (6).jpg";
import img_7 from "../../Assets/img/Gallery/galleryImg (7).jpg";
import img_8 from "../../Assets/img/Gallery/galleryImg (8).jpg";
import img_9 from "../../Assets/img/Gallery/galleryImg (9).jpg";
import img_10 from "../../Assets/img/Gallery/galleryImg (10).jpg";
import img_11 from "../../Assets/img/Gallery/galleryImg (11).jpg";
import img_12 from "../../Assets/img/Gallery/galleryImg (12).jpg";
import img_13 from "../../Assets/img/Gallery/galleryImg (13).jpg";

const imgSrc = [
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_2,
  },
  {
    id: 3,
    img: img_3,
  },
  {
    id: 4,
    img: img_4,
  },
  {
    id: 5,
    img: img_5,
  },
  {
    id: 6,
    img: img_6,
  },
  {
    id: 7,
    img: img_7,
  },
  {
    id: 8,
    img: img_8,
  },
  {
    id: 9,
    img: img_9,
  },
  {
    id: 10,
    img: img_10,
  },
  {
    id: 11,
    img: img_11,
  },
  {
    id: 12,
    img: img_12,
  },
  {
    id: 13,
    img: img_13,
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
        <div md={3} className="myGrid">
          {imgSrc.map((imgSrc) => (
            <div className="wrap">
              <div className="tumImg" onClick={() => imgClick(imgSrc.img)}>
                <img src={imgSrc.img} alt="" />
              </div>
            </div>
          ))}{" "}
        </div>
      </Row>
    </Container>
  );
};

export default Gallery_Img;
