import React from 'react';
import Particles from 'react-tsparticles';
import './Protfolio.css'
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import {FaLinkedin} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
const Protfolio = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <div className='protfolio-all'>
            <div>
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#acacac",
          },
          links: {
            color: "#acacac",
            distance: 140,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
   </div>
    <div className='header-all'>
        <h3>Protfo<span className='span-title'>lio.</span></h3>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to=''>Contact</Link>
        </ul>
    </div>
    

    <div className='head-manage'>
      <h1> HI I'A <span className='name-color'>FIROJ</span> </h1>
     
      <h2>
        <Typical className='type'
           loop={Infinity}
           steps={[
             "React Developer",
             2000,
             "Laravel Developer",
             2000,
             "Mern Stack Developer",
             2000,
             "Fullstack Web Developer",
             2000
           ]}
        />
      </h2>
      <small>Knock of bulding application with front and backend operation.</small>
      <br/>
      <a href="https://drive.google.com/drive/my-drive"><button>DOWNLOAD CV</button></a>
      
    </div>

    <div className='protfolio-icon'></div>
    <h4 className='logo-manage'>
                    <span className='icon-system-change'><FaLinkedin></FaLinkedin></span>
                    <span className='icon-system-change'> <FaFacebook></FaFacebook> </span>
                     <span className='icon-system-change'> <FaGithubSquare></FaGithubSquare> </span>
                 
                 
                
                
                </h4>
            
        </div>
    );
};

export default Protfolio;