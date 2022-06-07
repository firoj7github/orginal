import React from 'react';
import './Path.css';
import icon from '../../../image/p1.png.gif'
import { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';











const Path = () => {
    return (
        <div className='path-all'>

          <h1>My plan for your bussiness</h1>
             <Swiper className='testonimal-all'
             modules={[Autoplay]}
             spaceBetween={-70}
             centeredSlides={false}
             autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
             slidesPerView={2}
            
             
             
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
             
             
             
             >
               <SwiperSlide className='testonimal'>
                    <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta design are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    
              
             </Swiper>
        </div>
    );
};

export default Path;