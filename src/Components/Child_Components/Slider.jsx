import Aos from "aos";
import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import sliderImg_1 from "../../Assets/img/sample-1.jpg";
import sliderImg_2 from "../../Assets/img/sample-2.jpg";

const Slider = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Carousel
        itemsToShow={1}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        <div className="relative slider_item">
          <img className="img-fluid" src={sliderImg_1} alt="" />
          <div className="absolute text" data-aos="zoom-in">
            <h2 className="hard_Text mb-10">
              New Trending Goggles <br /> For Women
            </h2>
            <p className="fs-20 mb-20">
              Up To 40% Off Best Selling At{" "}
              <span className="theme-primary-color">$151.00</span>
            </p>
            <Link className="my-btn-primary fs-16">SHOP NOW</Link>
          </div>
        </div>
        <div className="relative slider_item">
          <img className="img-fluid" src={sliderImg_2} alt="" />
          <div className="absolute text" data-aos="zoom-in">
            <h2 className="hard_Text mb-10">
              New Trending Goggles <br /> For Men
            </h2>
            <p className="fs-20 mb-20">
              Up To 40% Off Best Selling At{" "}
              <span className="theme-primary-color">$151.00</span>
            </p>
            <Link className="my-btn-primary fs-16">SHOP NOW</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
