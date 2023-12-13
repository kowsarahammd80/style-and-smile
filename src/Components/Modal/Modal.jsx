"use client"

import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div>

         <dialog id="my_modal_3" className="modal " >
           <div className="modal-box">
           
             <form method="dialog" >
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-5">✕</button>
                <div className='grid grid-cols-1 gap-4 p-5 border my-5'> 
                <div className='text-center'>
                            <h1 className='text-2xl font-semibold'>Book Your Needs</h1>
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
                         <div className='inputDiv'>
                         <select className="select select-secondary w-full input-shadow-set">
                          <option disabled selected>Select Your Needs</option>
                          <option>Java</option>
                          <option>Go</option>
                          <option>C</option>
                          <option>C#</option>
                          <option>C++</option>
                          <option>Rust</option>
                          <option>JavaScript</option>
                          <option>Python</option>
                         </select>
                         </div>
                         <div className='text-Div'>
                           <textarea className="textarea textarea-secondary w-full input-shadow-set" placeholder="Your message"></textarea>
                         </div>
                         <button className='my-2 lg:my-5 xl:my-5 md:my-4 contact-submitButton'>Booking Now</button>
                </div>
             </form>
           </div>
         </dialog>
        </div>
    );
};

export default Modal;