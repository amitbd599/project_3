import React from "react";
import Cart_CouponCode from "../Components/Child_Components/Cart_CouponCode";
import Cart_Product from "../Components/Child_Components/Cart_Product";
import Footer from "../Components/Universal_Components/Footer";
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

      {/* Coupon Code */}

      <Cart_CouponCode></Cart_CouponCode>


      {/* Footer */}


      <Footer></Footer>
    </>
  );
};

export default Cart_Page;
