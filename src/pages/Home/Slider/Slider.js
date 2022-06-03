import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

import './Slider.css'

const Slider = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    return (
        <div className='slider-all'>
            <div className='btn-all'>
                <button className='slider-btn'>ALL</button>
                <button className='slider-btn'>HTML DESIGN</button>
                <button className='slider-btn'>REACT DESIGN</button>
                <button className='slider-btn'>WEB DEVELOPMENT</button>
            </div>
            <div className='service-all'>
                {
                    services.map(service=> <Category service={service}></Category>)
                }
               
            </div>
            
        </div>
    );
};

export default Slider;