import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

import './Slider.css'

const Slider = () => {
    
   const services= [
        {
            "id":1,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"html"
        
        
        },
        {
            "id":2,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"html"
        
        
        },
        {
            "id":3,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"react"
        
        
        },
        {
            "id":4,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"react"
        
        
        },
        {
            "id":5,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"react"
        
        
        },
        {
            "id":6,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"development"
        
        
        }
    ]
    const [items, setItem]=useState(services);
    
    const filterSide=(item)=>{
           const updateItem=services.filter(service=>{
            return service.category ===item;
           })
           setItem(updateItem);
    }
    return (
        <div className='slider-all'>
            <div className='btn-all'>
                <button onClick={()=>setItem(services)} className='slider-btn'>ALL</button>
                <button  onClick={()=>filterSide('html')} className='slider-btn'>HTML DESIGN</button>
                <button  onClick={()=>filterSide('react')} className='slider-btn'>REACT DESIGN</button>
                <button  onClick={()=>filterSide('development')} className='slider-btn'>WEB DEVELOPMENT</button>
            </div>
            <div className='service-all'>
                {
                    items.map(service=> <Category service={service} filterSide={filterSide}></Category>)
                }
               
            </div>
            
        </div>
    );
};

export default Slider;