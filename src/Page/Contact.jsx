import React from "react";
import ContactData from "../Components/Child_Components/ContactData";
import Footer from "../Components/Universal_Components/Footer";

import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const Contact = () => {
  return (
    <>
      {/* Header section */}
      <Header></Header>

      {/* Page name */}

      <PageName pageName="Contact"></PageName>

      {/* Contact Data */}
      <ContactData></ContactData>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Contact;
