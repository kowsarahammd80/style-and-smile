import ServiceList from '@/Components/ServiceList/ServiceList';
import ServiceSection from '@/Components/ServiceSection/ServiceSection';
import React from 'react';

const ServicePage = () => {

    return (

        <div className='pt-20'>
            <ServiceSection/>
            <ServiceList/>
        </div>

    );

};

export default ServicePage;