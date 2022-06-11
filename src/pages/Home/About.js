import React from 'react';
import img from '../../image/lol.png'
import './About.css'

const About = () => {
    return (
        <div id='about' className='detail-all'>
           
        <div className=' detail-img'>
             <img src={img} alt=''></img>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 detail-about'>
           <h4>ABOUT ME</h4>
           <p className='about-title'>
           My name is firoj hossain. I complete BSC in Computer Science from national University. I'm a passionate web designer and developer with 2 year experience in this domain, focused on building great and premium websites. I have done 60+ local projects in frontend development.
           <br/>
           <br/>
           I am a person who is positive about every aspect of life.I like to Typing, Designing & Programming.
           </p>
           <div >

               <sapn className='exp-manage'>
               <p className='experience'>Laravel</p>
               <p className='experience'>React</p>
               <p className='experience'>Typescript</p>
               <p className='experience'>Angular</p>
               <p className='experience'>Redux</p>
               <p className='experience'>HTML5</p>
               <p className='experience'>CSS3</p>
               <br/>
               <p className='experience'>Javascript</p>
               <p className='experience'>Node Js</p>
               <p className='experience'>Express Js</p>
               <p className='experience'>Bootstrap5</p>
               <p className='experience'>Jquery</p>
               <p className='experience'>Git</p>
               <p className='experience'>Github</p>
               <p className='experience'>Twailwind</p>
               <p className='experience'>Firebase</p>
               <p className='experience'>Mysql</p>
               <p className='experience'>Mongo db</p>
               </sapn>
           
           
           
               
              
               </div>
         </div>

    
</div>
    );
};

export default About;