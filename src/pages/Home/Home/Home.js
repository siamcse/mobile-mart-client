import React from 'react';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner />
            <Categories />
            <AdvertisedProduct />
        </div>
    );
};

export default Home;