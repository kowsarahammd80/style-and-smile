import React from 'react';
import './ContactForHomePage.css';
import Link from 'next/link';

const ContactForHomePage = () => {

    return (

        <div>

            <section className='contact-home-mainDiv mt-16'>
               
                 <div className='contact-home-content-div'>
                    
                    <div className='flex items-center pt-3 lg:pt-16 xl:pt-16 md:pt-8'>
                       <div className='text-center text-white'>
                        <h1 className='contactUsText-home'>Contact US</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link href='/contact'><button className='home-contactUs-button my-5'>Contact Now</button></Link>
                        
                       </div>
                    </div>     

                 </div>
              
            </section>

        </div>

    );

};

export default ContactForHomePage;