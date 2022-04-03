
import React from "react";
import Marquee from "react-fast-marquee";
import logo_1 from '../../Assets/img/logoSlider/1.jpg';
import logo_2 from '../../Assets/img/logoSlider/2.jpg';
import logo_3 from '../../Assets/img/logoSlider/3.jpg';
import logo_4 from '../../Assets/img/logoSlider/4.jpg';
import logo_5 from '../../Assets/img/logoSlider/5.jpg';
import logo_6 from '../../Assets/img/logoSlider/6.jpg';
import logo_7 from '../../Assets/img/logoSlider/7.jpg';
import logo_8 from '../../Assets/img/logoSlider/8.jpg';
const Logo_Marquee = () => {
  return (
    <div className="Logo_Marquee">
       <hr/>
      <Marquee className="mt-100 mb-100" >
          <img src={logo_1} alt="" />
          <img src={logo_2} alt="" />
          <img src={logo_3} alt="" />
          <img src={logo_4} alt="" />
          <img src={logo_5} alt="" />
          <img src={logo_6} alt="" />
          <img src={logo_7} alt="" />
          <img src={logo_8} alt="" />
      </Marquee>
      <hr />
    </div>
  );
};

export default Logo_Marquee;
