import React from 'react';
import './Experience.css'
import { HiDatabase} from "react-icons/hi";
import {FaCode} from "react-icons/fa";
import {FaPalette} from "react-icons/fa";

const Experience = () => {
    return (
        <div className='experience-all'>
            <h1><span className='o-color'>M</span>y Experience</h1>
            <div className='line-all'>
                <div className='line-1'></div>
                <div className='line-2'></div>

            </div>
          
           <div className='all'>
               
               <div className='part-1'>
               <h1 className='icon-2'><FaCode></FaCode></h1>
                <h3>Web Design</h3>
                <p>PSD to HTML</p>
                <p>React Site</p>
                <p>Ecommerce Site</p>
                <p>Ecommerce Site</p>
                <p>Single Page</p>
                <p>Multiple Page</p>
               </div>
               <div className='part-2'>
               <h1 className='icon-2'><HiDatabase></HiDatabase></h1>
               <h3>Web Development</h3>
                <p>PSD to HTML</p>
                <p>React Site</p>
                <p>Ecommerce Site</p>
                <p>Ecommerce Site</p>
                <p>Single Page</p>
                <p>Multiple Page</p>
               </div>
               <div className='part-3'>
               <h1 className='icon-2'><FaPalette></FaPalette></h1>
               <h3>Web Design</h3>
                <p>PSD to HTML</p>
                <p>React Site</p>
                <p>Ecommerce Site</p>
                <p>Ecommerce Site</p>
                <p>Single Page</p>
                <p>Multiple Page</p>
               </div>
               
               
               
               
               </div> 
              
        </div>
    );
};

export default Experience;