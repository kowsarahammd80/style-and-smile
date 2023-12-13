"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import revImage from '../../assetes/images/slide7.png'
import Image from 'next/image';
import './CLientReview.css'



const CLientReview = () => {
    return (
        <div>

           <div className='mt-16'>
              <p className='portFolioHeadline-welcomeTeaxt'>Our Client</p>
              <h1 className='our-gallery'> Our Testimonial</h1>
           </div>

            <section className='mx-5 lg:mx-40 xl:mx-40 md:mx-20 my-10'>
            <Swiper loop
            pagination navigation autoplay modules={[Navigation,Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1} 
    >
      <SwiperSlide className='my-5'>
        <div className='review-div'>
            <div className='review-img-div'>
               <Image className='review-img' src={revImage} alt="" />
            </div>
            <div className='review-text'>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptate maiores nemo distinctio. Alias beatae illo nulla. Alias, eveniet.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-5'>
        <div className='review-div'>
            <div className='review-img-div'>
               <Image className='review-img' src={revImage} alt="" />
            </div>
            <div className='review-text'>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptate maiores nemo distinctio. Alias beatae illo nulla. Alias, eveniet.</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-5 mx-5'>
        <div className='review-div'>
            <div className='review-img-div'>
               <Image className='review-img' src={revImage} alt="" />
            </div>
            <div className='review-text'>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum voluptate maiores nemo distinctio. Alias beatae illo nulla. Alias, eveniet.</p>
            </div>
        </div>
      </SwiperSlide>

    </Swiper>
            </section>

        </div>
    );
};

export default CLientReview;