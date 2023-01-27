import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ServiceSection from '../ServiceSection/ServiceSection';
import Statistics from '../Statistics/Statistics';
import WhyChoseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    useTitle('Home');
    return (
        <div className='my-20'>
            <Banner />
            <Categories />
            <AdvertisedProduct />
            <WhyChoseUs/>
            <Statistics />
            <ServiceSection />
        </div>
    );
};

export default Home;