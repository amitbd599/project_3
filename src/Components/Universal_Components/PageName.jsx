import React from 'react';
import { Link } from 'react-router-dom';

const PageName = () => {
    return (
        <div className='PageName'>
            <div className="wrap text-center">
                <span><Link to={'/'}>Home</Link></span> <span>/</span> <span className='theme-primary-color'>Page Name</span>
            </div>
        </div>
    );
};

export default PageName;