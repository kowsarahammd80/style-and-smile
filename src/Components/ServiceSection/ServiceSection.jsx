"use client"

import React from 'react';
import './ServiceSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Modal from '../Modal/Modal';



const ServiceSection = () => {

    return (

        <div className='service-bg'>
            <div className='my-10'>
                 <h1 className='serviceHeadline-welcomeTeaxt'> Welcome to Smile And Style </h1>
                 <p className='our-service'>Our Makeup Services</p>
            </div>
            
            <section className='service-div mx-5 lg:mx-28 xl:mx-28 md:mx-16 my-5'>
            <Swiper loop
            pagination navigation modules={[Navigation,Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1200: {
          slidesPerView: 4,
          
        },
      }}

    >
      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic4-5.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>Brow Design</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic1-7.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>Brow Design</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic2-7.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>SAHREE DRAPING</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic1-7.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>MACKUP DESIGN</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic2-7.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>SAHREE DRAPING</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='my-5'>
        <div className='slider-div'>
           
           <div className='sliderImage-div'>
             <img className='slider-image' src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic1-7.jpg" alt="" />
           </div>

           <div>
             <p className='slider-serviceName'>MACKUP DESIGN</p>
             <div className='flex justify-center'>
               <button className='service-bookButton' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
             </div>
           </div>
        </div>
      </SwiperSlide>

    </Swiper>
    <Modal/>
            </section>

        </div>

    );

};

export default ServiceSection;