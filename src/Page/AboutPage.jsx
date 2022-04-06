import React from "react";
import AboutPageData from "../Components/Child_Components/AboutPageData";
import About_OurTeam from "../Components/Child_Components/About_OurTeam";
import Counter from "../Components/Child_Components/Counter";
import Logo_Marquee from "../Components/Child_Components/Logo_Marquee";
import Testimonial from "../Components/Child_Components/Testimonial";
import Footer from "../Components/Universal_Components/Footer";
import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const AboutPage = () => {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Page info */}

      <PageName pageName="About US"></PageName>

      {/* About page detail data */}

      <AboutPageData></AboutPageData>

      {/* Our team */}

      <About_OurTeam></About_OurTeam>

      {/* Testimonial */}

      <Testimonial></Testimonial>

      {/* Counter */}

      <Counter></Counter>

      {/* Logo */}

      <Logo_Marquee></Logo_Marquee>
      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default AboutPage;
