import React from 'react';
import './Footer.css'

const Footer = () => {
    
    return (

        <div className='footer-bg p-10'>

            <section className='mx-5 lg:mx-24 xl:mx-24 md:mx-16'>
                 <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-3'> 
                    <div className='text-white my-5'>
                        <h1 className='text-2xl mb-1'>Phone & E-Mail</h1>
                        <p> <span><i class="fa-solid fa-phone"></i></span> +8801777196567</p>
                        <p> <span><i class="fa-solid fa-phone"></i></span> +8801777196567</p>
                        <p> <span><i class="fa-solid fa-envelope"></i></span> example@gmail.com</p>
                    </div>
                    <div className='text-white my-5'>
                        <h1 className='text-2xl mb-1'>Our Social Media</h1>
                        <div className='social-color cursor-pointer'>
                            <span><i class="fa-brands fa-facebook ms-5"></i></span>
                            <span><i class="fa-brands fa-instagram ms-5"></i></span>
                            <span><i class="fa-brands fa-youtube ms-5"></i></span>
                        </div>
                    </div>
                    <div className='text-white my-5'>
                        <h1 className='text-2xl mb-1'>Our Address</h1>
                        <p> <span><i class="fa-solid fa-location-dot"></i></span> House-48, Roade-4, Block-E, Sector-1, Aftab Nagar, Badda, Dhaka-1212.</p>

                        <div className='socialIconwhtasapp'>
                          <div className='whatsappbg'>
                            <a href="https://wa.me/">
                             <span className='p-1'> <i class="fa-brands text-green-600 fa-whatsapp text-5xl"></i></span>
                            </a>
                           
                          </div>

                          <div className='pt-1 ms-1 messenger-bg'>
                          <a href="">
                                <span className='p-1 '><i class="fa-brands fa-facebook-messenger text-blue-500 text-4xl"></i></span>
                            </a>
                          </div>   
                       </div>
                        
                    </div>
                 </div>
            </section>

        </div>
    );
};

export default Footer;