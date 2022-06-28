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
   {/* <nav class="navbar focus navbar-expand-lg navbar-white bg-dark text-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav> */}
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

    <a href="https://github.com/firoj7github"><span className='icon-system-change'><FaLinkedin></FaLinkedin></span></a>
    <a href="https://www.facebook.com/"><span className='icon-system-change'> <FaFacebook></FaFacebook> </span></a>
    <a href="https://www.linkedin.com/in/firoj-hossain-878765220/">
                     <span className='icon-system-change'> <FaGithubSquare></FaGithubSquare> </span></a>
                    
                    
                 
                 
                
                
                </h4>
            
        </div>
    );
};

export default Protfolio;