import React from "react";
import FaqData from "../Components/Child_Components/FaqData";
import Logo_Marquee from "../Components/Child_Components/Logo_Marquee";
import Footer from "../Components/Universal_Components/Footer";
import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const Faq = () => {
  return (
    <>
      {/* Header section */}
      <Header></Header>

      {/* Page Name */}

      <PageName pageName="FAQ"></PageName>

      {/* Faq data */}

      <FaqData></FaqData>

      {/* Logo  */}

      <Logo_Marquee></Logo_Marquee>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Faq;
