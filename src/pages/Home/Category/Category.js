import React from 'react';
import './Category.css'

const Category = ({service}) => {
    const { img, name, github, live}=service;
    return (

       
            <div className='category-img'>
            <img src={img} alt=""></img>
            <p>{name} <br/> React Site  </p>
            <a href={github}>Github</a>
            <a href={live}>Live Demo</a>
      
        </div>
        
    );
};

export default Category;