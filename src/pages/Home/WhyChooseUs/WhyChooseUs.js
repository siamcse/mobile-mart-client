import React from 'react';
import { FaTruck, FaHeadset, FaExchangeAlt, FaCubes } from 'react-icons/fa'

const WhyChoseUs = () => {
    return (
        <div className='w-full bg-gray-100 mt-20 md:h-auto py-14'>
            <div className='w-3/4 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex items-center md:justify-between'>
                    <div className='border-2 rounded-full border-neutral p-3'>

                        <FaTruck className='text-5xl text-secondary' />
                    </div>
                    <div className='text-left ml-2'>
                        <h2 className='text-xl font-bold py-1'>Free Shipping</h2>
                        <p className='font-medium text-gray-400'>Free delivery on purchase over $100</p>
                    </div>
                </div>
                <div className='flex items-center md:justify-evenly'>
                    <div className='border-2 rounded-full border-neutral p-3'>

                        <FaHeadset className='text-5xl text-secondary' />
                    </div>
                    <div className='text-left ml-2'>
                        <h2 className='text-xl  font-bold py-1'>24/7 Customer Support</h2>
                        <p className='font-medium text-gray-400'>Our Support Team Is Always Available For You</p>
                    </div>
                </div>
                <div className='flex items-center md:justify-evenly'>
                    <div className='border-2 rounded-full border-neutral p-3'>

                        <FaExchangeAlt className='text-5xl text-secondary' />
                    </div>
                    <div className='text-left ml-2'>
                        <h2 className='text-xl  font-bold py-1'>Easy Returns</h2>
                        <p className='font-medium text-gray-400'>Hassle free returns for the best experience</p>
                    </div>
                </div>
                <div className='flex items-center md:justify-evenly'>
                    <div className='border-2 rounded-full border-neutral p-3'>

                        <FaCubes className='text-5xl text-secondary' />
                    </div>
                    <div className='text-left ml-2'>
                        <h2 className='text-xl  font-bold py-1'>Top Quality</h2>
                        <p className='font-medium text-gray-400'>Our Products Quality Are The Best In The Market</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChoseUs;