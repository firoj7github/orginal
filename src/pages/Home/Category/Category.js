import React from 'react';
import './Category.css'

const Category = ({service}) => {
    const { img}=service;
    return (

       
            <div className='category-img'>
            <img src={img} alt=""></img>
            <p>Medical Website Design <br/> React Site  </p>
            <a href="">Github</a>
            <a href="">Live Demo</a>
      
        </div>
        
    );
};

export default Category;