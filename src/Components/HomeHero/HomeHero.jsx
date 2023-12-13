"use client"

import React from 'react';
import image from '../../assetes/images/slide7.png'
import './HomeHero.css'
import Image from 'next/image';
import Modal from '../Modal/Modal';



const HomeHero = () => {
    return (
        <div className='pt-20'>

             <section className='heroBg-set' style={{backgroundImage: `url(https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/pic2-7.jpg)`}}>

                <div className='div-bluer heroContent-set'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 mx-5 lg:mx-24 xl:mx-24 md:mx-16'>

                    <div className='flex justify-center items-center'>
                         <div className='hero-text-div'>

                           <h1 className='hero-headline pt-0 lg:pt-5 xl:pt-5 md:pt-16'>Bridal</h1>
                           <p className='bridal-text -mt-1 lg:-mt-8'>Bridal Mackup</p>
                           <p className='hero-pera-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate esse ullam exercitationem totam hic facere laboriosam voluptatem suscipit maxime.</p>

                           <div className='flex justify-center lg:justify-start xl:justify-start md:justify-center'>
                             <button className='hero-book-button my-5' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
                           </div>
                           <Modal/>
                         </div>
                    </div>
                      
                      <div className='flex justify-center items-center mt-2 lg:mt-10 xl:mt-10 md:mt-16'>
                         <Image className='hero-image ZoomIn' src={image}  alt=''/>
                      </div>

                   </div>

                </div>
               <Modal/>
             </section>

        </div>
    );
};

export default HomeHero;