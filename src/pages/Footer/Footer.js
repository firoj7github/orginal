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
                  <h4>Design by @Firoj</h4>
                  
                </div>
                <div>
                <h3 className='logo'><FaLinkedin></FaLinkedin> <span> <FaGithubSquare></FaGithubSquare> </span>
                 
                <span> <FaFacebook></FaFacebook> </span> 
                <span> <FaWhatsappSquare></FaWhatsappSquare> </span> 
                
                </h3>
               
                </div>
             
          </div>

        
              
        </div>
    );
};

export default Footer;