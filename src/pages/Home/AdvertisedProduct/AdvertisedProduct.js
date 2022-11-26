import React, { useEffect, useState } from 'react';
import Product from '../../Category/Product';
import BookingModal from '../../Shared/BookingModal/BookingModal';

const AdvertisedProduct = () => {
    const [advertisedProduct, setAdvertisedProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/adproducts')
            .then(res => res.json())
            .then(data => {
                setAdvertisedProduct(data);
            })
    }, []);
    
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
                                setSelectedProduct={setSelectedProduct}
                            ></Product>)
                        }
                    </div>
                    {
                        selectedProduct && <BookingModal
                            selectedProduct={selectedProduct}
                                setSelectedProduct={setSelectedProduct}
                        ></BookingModal>
                    }
                </div>
            }
        </div>
    );
};

export default AdvertisedProduct;