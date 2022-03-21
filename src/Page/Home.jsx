import React from "react";
import Header from "../Components/Universal_Components/Header";
import Hero_Card from "./Hero_Card";
import Hero_Image from "./Hero_Image";
import Slider from "./Slider";

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
    </>
  );
};

export default Home;
