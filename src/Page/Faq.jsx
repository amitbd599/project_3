import React from "react";
import FaqData from "../Components/Child_Components/FaqData";
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


      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Faq;
