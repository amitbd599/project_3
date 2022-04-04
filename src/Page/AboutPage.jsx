import React from 'react';
import AboutPageData from '../Components/Child_Components/AboutPageData';
import Footer from '../Components/Universal_Components/Footer';
import Header from '../Components/Universal_Components/Header';
import PageName from '../Components/Universal_Components/PageName';

const AboutPage = () => {
    return (
        <>
        {/* Header section */}

        <Header></Header>

        {/* Page info */}

        <PageName pageName="About US"></PageName>

        {/* About page detail data */}

        <AboutPageData></AboutPageData>




        {/* Footer */}

        <Footer></Footer>
            
        </>
    );
};

export default AboutPage;