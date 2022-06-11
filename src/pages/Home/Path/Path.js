import React from 'react';
import './Path.css';
import icon from '../../../image/best3.png'
import icon2 from '../../../image/pic15.png'
import icon3 from '../../../image/pic9.png'
import icon4 from '../../../image/pic10.png'
import icon5 from '../../../image/pic11.png'
import icon6 from '../../../image/pic12.png'
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
                      <p>If you want the lowdown on all the graphic design basics, you've come to the right place because we're going to cover them all.</p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon2}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta Service are you want?</h5>
                      <p>You don't just have to use a stroke-based border in CSS. You can also use any type of image, using border-image </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon3}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>How to get domain hosting?</h5>
                      <p>Web Hosting Made Simple. Pay For What You Use, Down To The Second. Start Now. Access from anywhere. Deploy at Google scale. </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon5}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta plan are you want?</h5>
                      <p>When talking about future goals, show that you are ambitious and career oriented, but without giving the impression. </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon4}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>How to grow a bussiness website?</h5>
                      <p>Give your business professional online presence with built-in e-commerce and SEO tools. Custom Domains.  </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='testonimal'>
                      <div className='testonimal-image'>
                      <img src={icon6}></img>
                    </div>
                    <div className='testonimal-title' >
                      <h5>Whta format are you want?</h5>
                      <p>Which format you choose depends on the balance you want to strike between quality and ease of use. </p>
                      <a href="">Read More</a>
                      </div>
                    </SwiperSlide>
                    
              
             </Swiper>
        </div>
    );
};

export default Path;