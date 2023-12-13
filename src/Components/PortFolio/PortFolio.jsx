import React from 'react';
import './PortFolio.css'
import Image from 'next/image';


const PortFolio = () => {

    return (
        <div>

           <div>
              <p className='portFolioHeadline-welcomeTeaxt'>Style And Smile</p>
              <h1 className='our-gallery'>Oure Gallery</h1>
           </div>

           <section className='my-10 mx-5 lg:mx-28 xl:mx-28 md:mx-16'>

              <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 gap-3'>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-2-500x700.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-3-450x450.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-4-1-500x700.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/1657550-scaled-500x700.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-7-1-450x450.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  <div className='div-for-right-carv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-8-1-450x450.jpg" className='porfolioImagesSiz1' alt="" />
                  </div>
                  {/* <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" className='' alt="" />
                  </div>
                  <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" alt="" className='' />
                  </div>
                  <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" alt="" />
                  </div>
                  <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" alt="" className='' />
                  </div>
                  <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" alt="" className='' />
                  </div>
                  <div className='portfolio-imagediv'>
                    <img src="https://beautyzone.wprdx.com/demo/wp-content/uploads/2020/11/image-1-450x450.jpg" alt="" className='' />
                  </div> */}
              </div>

           </section>

        </div>
    );

};

export default PortFolio;