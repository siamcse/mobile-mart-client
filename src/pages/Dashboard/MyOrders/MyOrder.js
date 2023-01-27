import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [deletingOrder, setDeletingOrder] = useState(null);

    useTitle('My Orders')

    const { data: ordersProduct = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://mobile-mart-server-siamcse.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteOrder = order => {
        axios.delete(`https://mobile-mart-server-siamcse.vercel.app/bookings/${order._id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(() => {
                toast.success(`${order.productName} is delete successful`);
                refetch();
            })
    }

    return (
        <div>
            <body class="flex items-center justify-center">
                <div class="container">
                    <h2 className='text-2xl my-8'>My Orders</h2>
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-white">
                            {
                                ordersProduct.map(product => <tr key={product._id} class="bg-teal-400 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-4 sm:mb-0">
                                    <th class="p-3 text-left h-24 sm:h-0">Image</th>
                                    <th class="p-3 text-left">Name</th>
                                    <th class="p-3 text-left">Price</th>
                                    <th class="p-3 text-left">Pay</th>
                                    <th class="p-3 text-left" width="110px">Actions</th>
                                </tr>)
                            }
                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                ordersProduct.map(product => <tr key={product._id} class="flex flex-col flex-nowrap sm:table-row mb-4 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-1 sm:p-3">
                                        <div className="avatar">
                                            <div className="rounded w-20 h-20">
                                                <img src={product.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{product.productName}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{product.price}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                        {
                                            product.paid ?
                                                <button disabled className='italic text-green-500'>Paid</button>
                                                :
                                                <Link to={`/dashboard/payment/${product._id}`}>Pay</Link>
                                        }
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer"><label onClick={() => setDeletingOrder(product)} htmlFor="popup-modal" className="cursor-pointer">
                                        <RiDeleteBin6Line className='text-red-600 text-2xl' />
                                    </label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </body>
            {
                deletingOrder && <ConfirmationModal
                    title={'Are you sure to delete?'}
                    message={`You are deleting this order: ${deletingOrder.productName}`}
                    successModal={handleDeleteOrder}
                    modalData={deletingOrder}
                    closeModal={setDeletingOrder}
                    action={'Delete'}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyOrder;