import React from 'react';
import './Footer.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-all'>
            <h3>Hire me any kind of website design and website development </h3>
            <p>If you have any sample design, just let me know. If you do <span className='sample'>not, just relax and let me awe you with my work.</span> </p>
           
             
           
          <input className='field' type='email' placeholder='Your Email'></input>
          <button className='submit-btn'>Submit</button>
          <hr className='line-big'></hr>

          
              <div className='footer-site'>
              <div>
                  <h5>Design by @Firoj</h5>
                  
                </div>
                <div>
                <h3 className='logo'>
                <a href="https://www.linkedin.com/in/firoj-hossain-878765220/"><span className='icon-system'><FaLinkedin></FaLinkedin></span></a>
                <a href="https://github.com/firoj7github"><span className='icon-system'> <FaGithubSquare></FaGithubSquare> </span></a>
               
                <a href="https://www.w3schools.com"> <span className='icon-system'> <FaFacebook></FaFacebook> </span></a>
                <a href="https://www.w3schools.com">   <span className='icon-system'> <FaWhatsappSquare></FaWhatsappSquare> </span> </a>
                    
                    
                     
                 
                
             
                
                </h3>
               
                </div>
             
          </div>

        
              
        </div>
    );
};

export default Footer;