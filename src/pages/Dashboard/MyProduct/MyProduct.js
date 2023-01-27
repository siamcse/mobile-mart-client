import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [advertisingProduct, setAdvertisingProduct] = useState(null);

    useTitle('My Products');

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://mobile-mart-server-siamcse.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = product => {
        console.log(product);
        fetch(`https://mobile-mart-server-siamcse.vercel.app/products/${product._id}`, {
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
        fetch(`https://mobile-mart-server-siamcse.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
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
            <body class="flex items-center justify-center">
                <div class="container">
                    <h2 className='text-2xl my-8'>My Products</h2>
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-white">
                            {
                                products.map(product => <tr key={product._id} class="bg-primary flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-4 sm:mb-0">
                                    <th class="p-3 text-left">Name</th>
                                    <th class="p-3 text-left">Resell Price</th>
                                    <th class="p-3 text-left">Sales Status</th>
                                    <th class="p-3 text-left">Advertise</th>
                                    <th class="p-3 text-left" width="110px">Actions</th>
                                </tr>)
                            }
                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                products.map(product => <tr key={product._id} class="flex flex-col flex-nowrap sm:table-row mb-4 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{product.name}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{product.resellPrice}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                        {
                                            product.isAvailable ?
                                                'Available' : 'Sold'
                                        }
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-2 truncate">
                                        {
                                            !product.advertise ?
                                                <>
                                                    <button disabled={!product.isAvailable} className='bg-primary text-white p-1 rounded-md'>
                                                        <label
                                                            htmlFor="popup-modal"
                                                            onClick={() => setAdvertisingProduct(product)}
                                                        >Advertise</label></button>
                                                </>
                                                :
                                                <p className='text-green-500 italic'>Advertised</p>
                                        }
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer"><label onClick={() => setDeletingProduct(product)} htmlFor="popup-modal" className="cursor-pointer">
                                        <RiDeleteBin6Line className='text-red-600 text-2xl' />
                                    </label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </body>
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