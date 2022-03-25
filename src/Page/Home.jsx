import React from "react";
import Header from "../Components/Universal_Components/Header";
import Hero_Card from "../Components/Child_Components/Hero_Card";
import Logo_Marquee from "../Components/Child_Components/Logo_Marquee";
import Shop_Image_Card from "../Components/Child_Components/Shop_Image_Card";
import Slider from "../Components/Child_Components/Slider";
import Hero_Image from "../Components/Child_Components/Hero_Image";
import New_Peoduct from "../Components/Child_Components/New_Peoduct";
import Intro from "../Components/Child_Components/Intro";
import InvestBord from "../Components/Child_Components/InvestBord";
import Testimonial from "../Components/Child_Components/Testimonial";
import Contact_Bar from "../Components/Child_Components/Contact_Bar";
import Footer from "../Components/Universal_Components/Footer";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Slider Section */}

      <Slider></Slider>

      {/* Hero image Data */}

      <Hero_Card></Hero_Card>

      {/* Hero Team */}

      <Hero_Image></Hero_Image>

      {/* Shop Card */}

      <Shop_Image_Card
        title_1="Matt Brown Sunglasses"
        title_2="Black Polarized Sunglasses"
        discount_1="30%"
        discount_2="20%"
        img_1="https://i.ibb.co/p3fwFPh/pexels-donald-tong-39716-1.png"
        img_2="https://i.ibb.co/PYbVHdg/pexels-ali-madad-sakhirani-997512-1.png"
      ></Shop_Image_Card>

      {/* Logo Marquee */}

      <Logo_Marquee></Logo_Marquee>

      {/* New Product */}

      <New_Peoduct></New_Peoduct>

      {/* Intro */}

      <Intro></Intro>

      {/* Invest Bord */}

      <InvestBord></InvestBord>

      {/* Testimonial */}

      <Testimonial></Testimonial>

      {/* Shop Card */}

      <Shop_Image_Card
        title_1="Trending Girls Sunglasses"
        title_2="Rectangle Polarized Magnetic"
        discount_1="40%"
        discount_2="30%"
        img_1="https://i.ibb.co/jgV3Xzm/pexels-carol-lemos-5834310-1.png"
        img_2="https://i.ibb.co/Gkmrc8M/pexels-nitin-dhumal-46710-1.png"
      ></Shop_Image_Card>

      {/* Contact Bar */}

      <Contact_Bar></Contact_Bar>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Home;
