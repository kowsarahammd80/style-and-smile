import React from 'react';
import bridalImg from '../../assetes/images/prize-img.png'
import branding1 from '../../assetes/images/branding1.jpg'
import branding2 from '../../assetes/images/branding2.jpg'
import Image from 'next/image';
import './ServiceList.css'



const ServiceList = () => {

    return (

        <div> 

           <section className='my-16'>

             <div className='flex-none lg:flex gap-0'>

                <div className='col-span-1 serviceList-img-bg-maindiv'>
                     <div className='serviceList-img-bg-div'>
                        <Image src={bridalImg} className='brandImage' alt="" />
                     </div>
                </div>

                <div className='bg-set col-span-4'>
                   <div>
                      <h1 className='text-2xl lg:text-4xl xl:text-4xl md:text-3xl font-semibold text-center p-2'>Our Genaler Service List</h1>
                   </div>

                   <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-2 lg:mx-10 xl:mx-10 md:mx-10 gap-1'>

                      <div className='serviceList-img-bg-div2'>
                         <Image alt='' src={branding1} className='brandImage2'/>
                      </div>

                      <div className='serviceList-img-bg-div2'>
                         <Image alt='' src={branding2} className='brandImage2'/>
                      </div>

                   </div>

                </div>
             
             </div>

           </section>

        </div>

    );

};

export default ServiceList;