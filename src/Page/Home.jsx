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

      <Shop_Image_Card></Shop_Image_Card>

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
    </>
  );
};

export default Home;
