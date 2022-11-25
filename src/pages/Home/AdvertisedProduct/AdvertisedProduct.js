import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../../Category/Product';

const AdvertisedProduct = () => {
    const [advertisedProduct, setAdvertisedProduct] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/adproducts')
            .then(res => res.json())
            .then(data => {
                setAdvertisedProduct(data);
            })
    }, [])
    return (
        <div>
            {
                advertisedProduct &&
                <div className='my-12'>
                        <h2 className='text-3xl text-center font-semibold'>Advertised Products {advertisedProduct?.length}</h2>
                        <div className='lg:w-3/4 mx-auto'>
                            {
                                advertisedProduct.map(product => product.isAvailable && <Product
                                key={product._id}
                                product={product}
                                ></Product>)
                            }
                        </div>
                </div>
            }
        </div>
    );
};

export default AdvertisedProduct;