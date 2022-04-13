import React from 'react';
import Gallery_Img from '../Components/Child_Components/Gallery_Img';
import Footer from '../Components/Universal_Components/Footer';
import Header from '../Components/Universal_Components/Header';
import PageName from '../Components/Universal_Components/PageName';
const Gallery = () => {
    return (
        <>
            {/* Header Section */}

            <Header></Header>

            {/* Page Name */}

            <PageName pageName="Gallery"></PageName>

            {/* Gallery */}

            <Gallery_Img></Gallery_Img>

            {/* Footer */}

            <Footer></Footer>
        </>
    );
};

export default Gallery;