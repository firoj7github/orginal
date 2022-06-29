import React, { useEffect } from 'react';
import './Category.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Category = ({service}) => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    const { img, name, github, live}=service;
    return (

       
            <div data-aos="fade-up" className='category-img'>
            <img src={img} alt=""></img>
            <p>{name} <br/> React Site  </p>
            <a href={github}>Github</a>
            <a href={live}>Live Demo</a>
      
        </div>
        
    );
};

export default Category;