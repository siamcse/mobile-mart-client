import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import ConfirmationModal from '../Shared/ConfirmationModal/ConfirmationModal';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [reportProduct, setReportProduct] = useState(null);

    const handleReportProduct = product => {
        console.log(product);
        const { name, email, seller, _id, resellPrice } = product;
        const reportProduct = {
            name, email, seller, resellPrice,
            productId: _id
        };
        axios.post('http://localhost:5000/reportProducts', reportProduct)
            .then(result => {
                console.log(result.data);
                toast.success(result.data.message);
            })
    }

    return (
        <div className='my-12'>
            <h2 className='text-3xl text-center font-semibold'>Products</h2>
            <div className='lg:w-3/5 mx-auto'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setSelectedProduct={setSelectedProduct}
                        setReportProduct={setReportProduct}
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
    );
};

export default Category;