"use client"

import Link from 'next/link';
import React, { useRef } from 'react';
import './Navbar.css'
import navLogo from '../../assetes/images/navlogo-parler.png'
import Image from 'next/image';
import Modal from '../Modal/Modal';
import ReviewModal from '../ReviewModal/ReviewModal';

const Navbar = () => {

    const navRef = useRef();
     
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <div className='shadow fixed z-50 w-full'>
            
        <header className='navBar-background'>

        <Image src={navLogo} alt="" className='navLogo-set'/>

         <nav ref={navRef} onClick={showNavbar} className='nav-link'>

             <Link className='navLink-hover ms-6 lg:ms-28 xl:ms-28' href="/">Home</Link>
             <Link href="/service">Service</Link>
             <Link href="/portfolio">Gallery</Link>
             <Link href="/about">About</Link>
             <Link href="/contact">Contact</Link>
             <button className='text-white ms-0 lg:ms-2 xl:ms-2' onClick={()=>document.getElementById('my_modal_4').showModal()}>Review</button>
            

             <button
                 className="nav-btn nav-close-btn">
                 <i class="fa-regular fa-circle-xmark"></i>
             </button>

         </nav>

         <div className='w-full lg:w-36 xl:w-36 flex justify-center lg:justify-end xl:justify-end'>
                 <button className='text-white nav-bookNow p-1 lg:p-2 xl:p-2 md:p-2' onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
                 
         </div>
      
         <button
             className="nav-btn"
             onClick={showNavbar}>
             <i class="fa-solid fa-bars"></i>
         </button>

     </header>
     <ReviewModal/>
     <Modal/>
     </div>
    );
};

export default Navbar;