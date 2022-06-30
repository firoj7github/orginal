import React, { useEffect } from 'react';
import './Detail.css'
import img from '../../../image/lol2.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Detail = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div id="about" className='detail-side'>
            <div className='detail-manage'>

            <div data-aos="zoom-in-right" className=' detail-img'>
                     <img src={img} alt=''></img>
                </div>
                <div data-aos="fade-left" className='detail-about'>
                   <h4>ABOUT ME</h4>
                   <h6 className='about-title'>
                   My name is firoj hossain. I complete BSC in Computer Science from national University. I'm a passionate web designer and developer with 2 year experience in this domain, focused on building great and premium websites. I have done 60+ local projects in frontend development.
                   <br/>
                   <br/>
                   I am a person who is positive about every aspect of life.I like to Typing, Designing & Programming.
                   </h6>
                   <div>
                   

                       <sapn className='exp-manage'>
                       <p className='experience-element'>Laravel</p>
                       <p className='experience-element'>React</p>
                       <p className='experience-element'>Typescript</p>
                       <p className='experience-element'>Angular</p>
                       <p className='experience-element'>Redux</p>
                       <p className='experience-element'>HTML5</p>
                       <p className='experience-element'>CSS3</p>
                       <br/>
                       <p className='experience-element'>Javascript</p>
                       <p className='experience-element'>Node Js</p>
                       <p className='experience-element'>Express Js</p>
                       <p className='experience-element'>Bootstrap5</p>
                       <p className='experience-element'>Jquery</p>
                       <p className='experience-element'>Git</p>
                       <p className='experience-element'>Github</p>
                       <p className='experience-element'>Twailwind</p>
                       <p className='experience-element'>Firebase</p>
                       <p className='experience-element'>Mysql</p>
                       <p className='experience-element'>Mongo db</p>
                       </sapn>
                   
                       </div>
                   
                       
                      
                      
                 </div>

            </div>
           
               
            
        </div>
    );
};

export default Detail;