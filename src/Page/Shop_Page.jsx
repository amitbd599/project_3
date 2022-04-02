import React from 'react';
import Shop_Page_products from '../Components/Child_Components/Shop_Page_products';
import Header from '../Components/Universal_Components/Header';
import PageName from '../Components/Universal_Components/PageName';

const Shop_Page = () => {
    return (
        <>
        {/* Header Section */}
        <Header></Header>

        {/* Page info Data */}

        <PageName></PageName>

        {/* Product items */}

        <Shop_Page_products></Shop_Page_products>
            
        </>
    );
};

export default Shop_Page;