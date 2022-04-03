import React from 'react';
import Logo_Marquee from '../Components/Child_Components/Logo_Marquee';
import Shop_Page_products from '../Components/Child_Components/Shop_Page_products';
import Footer from '../Components/Universal_Components/Footer';
import Header from '../Components/Universal_Components/Header';
import PageName from '../Components/Universal_Components/PageName';

const Shop_Page = () => {
    return (
        <>
        {/* Header Section */}
        <Header></Header>

        {/* Page info Data */}

        <PageName pageName="Shop Page"></PageName>

        {/* Product items */}

        <Shop_Page_products></Shop_Page_products>


        {/* Logo Section */}

        <Logo_Marquee></Logo_Marquee>

        {/* Footer */}

        <Footer></Footer>
            
        </>
    );
};

export default Shop_Page;