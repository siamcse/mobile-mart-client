import React from 'react';
import AdvertisedProduct from '../AdvertisedProduct/AdvertisedProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedProduct />
            <Categories />
        </div>
    );
};

export default Home;