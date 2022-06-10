import React from 'react';
import './Category.css'

const Category = ({service}) => {
    const { img, name}=service;
    return (

       
            <div className='category-img'>
            <img src={img} alt=""></img>
            <p>{name} <br/> React Site  </p>
            <a href="">Github</a>
            <a href="">Live Demo</a>
      
        </div>
        
    );
};

export default Category;