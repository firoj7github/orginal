import React from 'react';
import Footer from '../Footer/Footer';
import Detail from './Detail/Detail';
import Experience from './Experience/Experience';
import Path from './Path/Path';
import Protfolio from './Protfolio/Protfolio';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            
          <Protfolio></Protfolio>  
          <Detail></Detail>
          <Slider></Slider>
          <Experience></Experience>
          <Path></Path>
          <Footer></Footer>
        </div>
    );
};

export default Home;