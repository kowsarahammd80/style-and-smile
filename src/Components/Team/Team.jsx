import React from 'react';
import teamImage from '../../assetes/images/perlouerTeamImg.jpg';
import Image from 'next/image';
import './Team.css';



const Team = () => {
    return (
        <div>

            <div className='text-center font-semibold text-3xl my-16'>
                <p className='portFolioHeadline-welcomeTeaxt'>Team</p>
                <h1>Oure Expert Team</h1>
            </div>
            
            <section className='mx-5 lg:mx-28 xl:mx-28 md:mx-16 my-10'>

                 <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-4'>
                       
                 <div className="card card-compact w-full bg-base-100 teamCardShadow">
                     <figure><Image src={teamImage} alt={teamImage} className='teamImage' /></figure>
                  <div className="card-body">
                     <h2 className="text-center font-semibold text-xl">Name</h2>
                     <p className='text-center font-semibold'>Designation</p>
                  </div>

                 </div>
                 <div className="card card-compact w-full bg-base-100 teamCardShadow">
                     <figure><Image src={teamImage} alt={teamImage} className='teamImage' /></figure>
                  <div className="card-body">
                     <h2 className="text-center font-semibold text-xl">Name</h2>
                     <p className='text-center font-semibold'>Designation</p>
                  </div>
                 </div>
                 <div className="card card-compact w-full bg-base-100 teamCardShadow">
                     <figure><Image src={teamImage} alt={teamImage} className='teamImage' /></figure>
                  <div className="card-body">
                     <h2 className="text-center font-semibold text-xl">Name</h2>
                     <p className='text-center font-semibold'>Designation</p>
                  </div>
                 </div>
                 <div className="card card-compact w-full bg-base-100 teamCardShadow">
                     <figure><Image src={teamImage} alt={teamImage} className='teamImage' /></figure>
                  <div className="card-body">
                     <h2 className="text-center font-semibold text-xl">Name</h2>
                     <p className='text-center font-semibold'>Designation</p>
                  </div>
                 </div>

                 </div>

            </section>

        </div>
    );
};

export default Team;