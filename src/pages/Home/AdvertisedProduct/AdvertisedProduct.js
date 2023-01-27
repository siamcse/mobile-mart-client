import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Product from '../../Category/Product';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AdvertisedProduct = () => {
    const [advertisedProduct, setAdvertisedProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [reportProduct, setReportProduct] = useState(null);

    useEffect(() => {
        fetch('https://mobile-mart-server-siamcse.vercel.app/adproducts', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdvertisedProduct(data);
            })
    }, []);

    const handleReportProduct = product => {
        console.log(product);
        const { name, email, seller, _id, resellPrice } = product;
        const reportProduct = {
            name, email, seller, resellPrice,
            productId: _id
        };
        axios.post('https://mobile-mart-server-siamcse.vercel.app/reportProducts', reportProduct)
            .then(result => {
                console.log(result.data);
                toast.success(result.data.message);
            })
    }

    if (advertisedProduct.length <= 0) {
        return <div>

        </div>
    }

    return (
        <>
            {
                advertisedProduct &&
                <div className='my-20'>
                    <h2 className='text-3xl text-center font-semibold'>Advertised Products</h2>
                    <div className='lg:w-3/4 mx-auto'>
                        {
                            advertisedProduct.map(product => product.isAvailable && <Product
                                key={product._id}
                                product={product}
                                setSelectedProduct={setSelectedProduct}
                                setReportProduct={setReportProduct}
                            ></Product>)
                        }
                    </div>
                    {
                        selectedProduct && <BookingModal
                            selectedProduct={selectedProduct}
                            setSelectedProduct={setSelectedProduct}
                        ></BookingModal>
                    }
                    <div>
                        {
                            reportProduct && <ConfirmationModal
                                title={'Are You sure to report this product?'}
                                message={`You are report to admin "${reportProduct.name}" product`}
                                successModal={handleReportProduct}
                                modalData={reportProduct}
                                closeModal={setReportProduct}
                                action={'Report'}
                            ></ConfirmationModal>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default AdvertisedProduct;