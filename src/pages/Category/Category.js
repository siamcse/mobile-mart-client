import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    return (
        <div className='my-12'>
            <h2 className='text-3xl text-center font-semibold'>Products {products.length}</h2>
            <div className='lg:w-3/5 mx-auto'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Category;