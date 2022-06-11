import React from 'react';
import './Experience.css'
import { HiDatabase} from "react-icons/hi";
import {FaCode} from "react-icons/fa";
import {FaBuffer} from "react-icons/fa";

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
               <h2 className='icon-22'><FaCode></FaCode></h2>
                <h3>Website Design</h3>
                <p>PSD to HTML</p>
                <p>Single Page </p>
                <p>Multiple Page</p>
                <p>React Website</p>
                <p>Bussiness Website</p>
                <p>Ecommerce Website</p>
               
               
                
               </div>
               <div className='part-2'>
               <h2 className='icon-22'><HiDatabase></HiDatabase></h2>
               <h3>Web Development</h3>
                <p>Creat Database</p>
                <p>Restful API</p>
                <p>Admin C-panel</p>
                <p>Dashboard Provider</p>
                <p>Firebase Authentication</p>
                
                
               
                <p>Website Disaster Recovery</p>
               </div>
               <div className='part-3'>
               <h2 className='icon-22'><FaBuffer></FaBuffer></h2>
               <h3>Graphic Design</h3>
                <p>UI/UX Design</p>
                <p>Logo Design</p>
                <p>T-shirt Design</p>
                <p>Banner Design</p>
                <p>Bussiness Card</p>
                <p>Book Cover Design</p>
               </div>
               
               
               
               
               </div> 
              
        </div>
    );
};

export default Experience;