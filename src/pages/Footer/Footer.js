import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-all'>
            <h3>Hire me any kind of website design and website development </h3>
            <p>If you have any sample design, just let me know. If you do <span className='sample'>not, just relax and let me awe you with my work.</span> </p>
           
             
            <form>
                <input type='email'name='email' ></input>
                <input value='submit' >submit</input>

            </form>
              
        </div>
    );
};

export default Footer;