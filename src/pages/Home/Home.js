import React from 'react';
import Detail from './Detail/Detail';
import Experience from './Experience/Experience';
import Protfolio from './Protfolio/Protfolio';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            
          <Protfolio></Protfolio>  
          <Detail></Detail>
          <Slider></Slider>
          <Experience></Experience>
        </div>
    );
};

export default Home;