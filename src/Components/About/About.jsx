import React from 'react';
import './About.css';
import Team from '../Team/Team';
import Image from 'next/image';
import aboutImg from '../../assetes/images/overViewParlour.jpeg'
import aboutImg2 from '../../assetes/images/overView2.jpeg';


const About = () => {
    return (
        <div>

            <div className='pt-20'>

              <div className='aboutBgImgae' style={{backgroundImage: 'url(https://content.api.news/v3/images/bin/3a768477a92c451d47601fa6a7f360a4)'}}>
                <div className='aboutTextdiv flex justify-center items-center'>
                    <h1 className='about-textset'>About Us</h1>
                </div>
              </div>

            </div>
            
            <section className='mx-5 lg:mx-28 xl:mx-28 my-10 border'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>

                    <div className='flex justify-center items-center'>
                        <div className='mx-3'>
                             <h1 className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias laudantium voluptas ex natus nemo rem! Aspernatur consectetur quasi vero sapiente quae natus, omnis recusandae fugit molestiae quod suscipit est possimus neque voluptas eaque commodi, debitis, ipsum molestias maiores sint saepe dolores ratione. Suscipit est doloremque, dolorem illum aperiam harum dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis facilis provident temporibus exercitationem! Culpa fugit qui eligendi, totam error delectus! Officia neque recusandae commodi, tempora pariatur consectetur officiis fugiat, corrupti soluta temporibus veritatis, ducimus cupiditate architecto illum laborum doloremque fuga! Quia praesentium accusantium distinctio officiis asperiores odio est ipsam sed!</h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 p-1'>
                        <div className='aboutSectionImg-div'>
                            <Image src={aboutImg} className='aboutSectionImg' alt=''/>
                        </div>
                        <div className='aboutSectionImg-div'>
                            <Image src={aboutImg2} className='aboutSectionImg' alt=''/>
                        </div>
                        <div className='aboutSectionImg-div'>
                            <Image src={aboutImg2} className='aboutSectionImg' alt=''/>
                        </div>
                        <div className='aboutSectionImg-div'>
                            <Image src={aboutImg} className='aboutSectionImg' alt=''/>
                        </div>
                    </div>

                </div>
            </section>

            <Team/>

        </div>
    );
};

export default About;