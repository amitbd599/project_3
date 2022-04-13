import React from "react";
import SingleBlogData from "../Components/Child_Components/SingleBlogData";
import Footer from "../Components/Universal_Components/Footer";
import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const SingleBlog = () => {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Page name */}

      <PageName pageName="Single Blog"></PageName>

      {/* Single blog data */}

      <SingleBlogData></SingleBlogData>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default SingleBlog;
