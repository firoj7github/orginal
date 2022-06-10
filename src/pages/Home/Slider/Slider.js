import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

import './Slider.css'

const Slider = () => {
    
   const services= [
        {
            "id":1,
            "img":"https://i.ibb.co/pzfW4w4/p1-png.gif",
            "category":"html",
            "name":"Travel Website"
        
        
        },
        {
            "id":2,
            "img":"https://i.ibb.co/w0r7vsb/Medical-Website-Design.jpg",
            "category":"react",
            "name":"Medical Website"
        
        
        },
        {
            "id":3,
            "img":"https://i.ibb.co/Y0Z4s62/10-png.gif",
            "category":"react",
            "name":"Travel Website"
        
        
        },
        {
            "id":4,
            "img":"https://i.ibb.co/SrcGTKh/new-arrival-headphone-banner-template-design-92fdef62bec8a565abe0a24ccc7535d0-screen.jpg",
            "category":"react",
            "name":"Ecommerce Website"
        
        
        },
        {
            "id":5,
            "img":"https://i.ibb.co/S0GGM0f/img4-png.gif",
            "category":"html",
            "name":"Travel Website"
        
        
        },
        {
            "id":6,
            "img":"https://i.ibb.co/t4hcwnJ/gimox-fitness-theme.png",
            "category":"development",
            "name":"Gymnastic Website"
        
        
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