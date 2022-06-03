import React from 'react';
import './Category.css'

const Category = ({service}) => {
    const { img}=service;
    return (
        <div className='category-img'>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Category;