import React from "react";
import BlogData from "../Components/Child_Components/BlogData";
import SingleBlogData from "../Components/Child_Components/SingleBlogData";
import Footer from "../Components/Universal_Components/Footer";
import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const Blog = () => {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Page info */}

      <PageName pageName="Blog"></PageName>

      {/* Blog Data */}

      <BlogData></BlogData>

      

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Blog;
