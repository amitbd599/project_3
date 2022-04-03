import React from "react";
import Cart_Product from "../Components/Child_Components/Cart_Product";
import Header from "../Components/Universal_Components/Header";
import PageName from "../Components/Universal_Components/PageName";

const Cart_Page = () => {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Page Name */}
      <PageName pageName="Cart"></PageName>

      {/* Product Detail */}
      <Cart_Product></Cart_Product>
    </>
  );
};

export default Cart_Page;
