import React from 'react';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div>

            <div className='getinTuch-text-div'>
                 <h1> Get In Tuch </h1>
            </div>

            <section className='mx-5 lg:mx-28 xl:mx-28 md:mx-16 my-16'>

                <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-4'>

                    <form className='grid grid-cols-1 gap-4 p-5 border'>
                        
                        <div className='text-center'>
                            <h1 className='text-2xl font-semibold'>Send Massage Us</h1>
                        </div>

                         <div className='inputDiv'>
                            <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full input-shadow-set" />
                         </div>
                         <div className='inputDiv'>
                            <input type="text" placeholder="Number" className="input input-bordered input-secondary w-full input-shadow-set" />
                         </div>
                         <div className='inputDiv'>
                            <input type="text" placeholder="Email" className="input input-bordered input-secondary w-full input-shadow-set" />
                         </div>
                         <div className='text-Div'>
                           <textarea className="textarea textarea-secondary w-full input-shadow-set" placeholder="Your message"></textarea>
                         </div>
                         <button className='my-2 lg:my-5 xl:my-5 md:my-4 contact-submitButton'>Submit</button>
                    </form>
                    
                    <div className='p-5 border'>
                          
                          <div className='text-center'>
                             <h1 className='font-semibold text-2xl'>Quick Contact</h1>
                             <p className='text-start'>If you have any questions simply use the following contact details.</p>
                          </div>

                          <div className='my-5 border p-2'>
                             <div className='flex items-center'>
                                 <div className='me-3 border p-1'>
                                    <span className='phoneandMailicon'><i class="fa-solid fa-phone text-3xl phoneandMailicon text-pink-500"></i></span>
                                 </div>
                                 <div className='text-lg font-semibold'>
                                    <p>Contact Number:</p>
                                    <p>+8801777196567</p>
                                    <p>+8801777196567</p>
                                 </div>
                             </div>
                          </div>

                          <div className='my-5 border p-2'>
                             <div className='flex items-center'>
                                 <div className='me-3 border p-1'>
                                 <span><i class="fa-solid fa-envelope text-3xl text-pink-500"></i></span>
                                 </div>
                                 <div className='text-lg font-semibold'>
                                    <p>Email:</p>
                                    <p>exaplme@gmail.com</p>
                                 </div>
                             </div>
                          </div>

                          <div className='my-5 border p-3'>
                             <div>
                             <div className='social-color cursor-pointer'>
                            <span><i class="fa-brands fa-facebook ms-5"></i></span>
                            <span><i class="fa-brands fa-instagram ms-5"></i></span>
                            <span><i class="fa-brands fa-youtube ms-5"></i></span>
                        </div>
                             </div>
                          </div>

                    </div>

                    <div className='p-5 border'>
                          
                          <div className='text-center'>
                             <h1 className='font-semibold text-2xl'>Our Perlar Address</h1>
                             <p>Visit Our Parlar Pycilac</p>
                          </div>

                          <div className='my-5 border p-2'>

                             <div className='flex items-center'>
                                 <div className='me-3 border p-1'>
                                    <span className='phoneandMailicon'><i class="fa-solid fa-location-dot text-3xl text-pink-500"></i></span>
                                 </div>
                                 <div className='text-lg font-semibold'>
                                    <p>Address</p>
                                     <p>House-48, Roade-4, Block-E, Sector-1, Aftab Nagar, Badda, Dhaka-1212 .</p>
                                 </div>
                             </div>
                          </div>


                    </div>

                </div>

            </section>

        </div>
    );
};

export default ContactUs;