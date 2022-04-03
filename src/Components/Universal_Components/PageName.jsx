import React from 'react';
import { Link } from 'react-router-dom';

const PageName = (props) => {
    const {pageName}=props;
    return (
        <div className='PageName'>
            <div className="wrap text-center">
                <span><Link to={'/'}>Home</Link></span> <span>/</span> <span className='theme-primary-color'>{pageName}</span>
            </div>
        </div>
    );
};

export default PageName;