import React from 'react';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner />
            <Categories />
            <AdvertisedProduct />
            <ServiceSection/>
        </div>
    );
};

export default Home;