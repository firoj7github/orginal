import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

import './Slider.css'

const Slider = () => {
    
   const services= [
        {
            "id":1,
            "img":"https://i.ibb.co/PcrrYxt/dynamic-web-pages.jpg",
            "category":"html",
            "name":"Designer Website",
            "github":"https://github.com/firoj7github/React-architecture-web",
            "live":"https://incomparable-cendol-501f80.netlify.app/"
        
        
        },
        {
            "id":2,
            "img":"https://i.ibb.co/w0r7vsb/Medical-Website-Design.jpg",
            "category":"react",
            "name":"Medical Website",
            "github":" https://github.com/firoj7github/React-medical-web",
            "live":"https://incredible-sprite-50231f.netlify.app"
        
        
        },
        {
            "id":3,
            "img":"https://i.ibb.co/Y0Z4s62/10-png.gif",
            "category":"react",
            "name":"Travel Website",
            "github":" https://github.com/firoj7github/React-Photographic-Web",
            "live":"https://travel-web-9911a.web.app/"
        
        
        },
        {
            "id":4,
            "img":"https://i.ibb.co/Y8ckrQ5/What-Can-You-Expect-From-Ecommerce-Website-Design.png",
            "category":"react",
            "name":"Ecommerce Website",
            "github":" https://github.com/firoj7github/React-Photographic-Web",
            "live":"https://wirehouse-cbe76.web.app/"
        
        
        },
        {
            "id":5,
            "img":"https://i.ibb.co/rwkBRGP/1603866257-171-13-Beautiful-HTML-Wedding-Website-Templates-2020.jpg",
            "category":"html",
            "name":"Weadding Website",
            "github":"https://github.com/firoj7github/Weadding-Website",
            "live":"https://firoj7github.github.io/Weadding-Website/"
        
        
        },
        {
            "id":6,
            "img":"https://i.ibb.co/t4hcwnJ/gimox-fitness-theme.png",
            "category":"development",
            "name":"Gymnastic Website",
            "github":" https://github.com/firoj7github/React-Photographic-Web",
            "live":""
        
        
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
            <h1 className='slider-title'><span className='o-color'>M</span>y Protfolio</h1>
            <div className='line-all-slide'>
                <div className='line-3'></div>
                <div className='line-4'></div>

            </div>
            <div className='btn-all'>
                <a onClick={()=>setItem(services)} className='slider-btn'><span>ALL</span></a>
                <a  onClick={()=>filterSide('html')} className='slider-btn'><span>HTML DESIGN</span></a>
                <a  onClick={()=>filterSide('react')} className='slider-btn'><span>REACT</span></a>
                <a  onClick={()=>filterSide('development')} className='slider-btn'><span>WEB DEVELOPMENT</span></a>
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