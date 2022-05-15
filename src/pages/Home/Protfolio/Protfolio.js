import React from 'react';
import Particles from 'react-tsparticles';
import './Protfolio.css'
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
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
            value: "#C0C0C0",
          },
          links: {
            color: "#C0C0C0",
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
            value: 80,
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
            <Link to=''>Home</Link>
            <Link to=''>Protfolio</Link>
            <Link to=''>Service</Link>
            <Link to=''>Contact</Link>
        </ul>
    </div>
    
            
        </div>
    );
};

export default Protfolio;