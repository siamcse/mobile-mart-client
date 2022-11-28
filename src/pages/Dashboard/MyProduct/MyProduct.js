import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [advertisingProduct, setAdvertisingProduct] = useState(null);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = product => {
        console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Deleted Successfully');
                    refetch();
                }
            })
    };

    const handleAdvertisingProduct = product => {
        console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Product Advertised Successfully');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl my-8'>My Products</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Resell Price</th>
                                <th>Sales Status</th>
                                <th>Advertise</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => <tr
                                    key={product._id}
                                    className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.resellPrice}</td>
                                    <td>
                                        {
                                            product.isAvailable ?
                                                'Available' : 'Sold'
                                        }
                                    </td>
                                    <td>
                                        {
                                            !product.advertise ?
                                                <>
                                                    <button disabled={!product.isAvailable} className='btn btn-ghost'>
                                                        <label
                                                            htmlFor="popup-modal"
                                                            onClick={() => setAdvertisingProduct(product)}
                                                        >Advertise</label></button>
                                                </>
                                                :
                                                <p className='text-green-500 italic'>Advertised</p>
                                        }
                                    </td>
                                    <td>
                                        <label
                                            onClick={() => setDeletingProduct(product)} htmlFor="popup-modal"
                                            className='btn btn-ghost'>
                                            <RiDeleteBin6Line className='text-red-600 text-xl' />
                                        </label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={'Are you sure to delete?'}
                    message={`You are deleting this product: ${deletingProduct.name}`}
                    successModal={handleDeleteProduct}
                    modalData={deletingProduct}
                    closeModal={setDeletingProduct}
                    action={'Delete'}
                >
                </ConfirmationModal>
            }
            {
                advertisingProduct && <ConfirmationModal
                    title={'Are you sure to Advertise?'}
                    message={`You are advertising this product: ${advertisingProduct.name}`}
                    successModal={handleAdvertisingProduct}
                    modalData={advertisingProduct}
                    closeModal={setAdvertisingProduct}
                    action={'Advertise'}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;