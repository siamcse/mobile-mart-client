import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className='my-12'>
            <h2 className='text-3xl text-center font-semibold'>Products {products.length}</h2>
            <div className='lg:w-3/5 mx-auto'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                    ></Product>)
                }
            </div>
            <div>
                {
                    selectedProduct && <BookingModal
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Category;