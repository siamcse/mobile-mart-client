import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [payingOrder, setPayingOrder] = useState(null);

    const { data: ordersProduct = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteOrder = order => {
        axios.delete(`http://localhost:5000/bookings/${order._id}`)
            .then(() => {
                toast.success(`${order.productName} is delete successful`);
                refetch();
            })
    }

    return (
        <div>
            <h2 className='text-2xl my-8'>Orders {ordersProduct.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordersProduct.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-20 h-20">
                                            <img src={order.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>
                                    {
                                        order.paid ?
                                        <button disabled className='italic text-green-500'>Paid</button>
                                        :
                                        <Link to={`/dashboard/payment/${order._id}`}>Pay</Link>
                                    }
                                </td>
                                <td>
                                    <label onClick={() => setDeletingOrder(order)} htmlFor="popup-modal" className="btn btn-ghost">
                                        <RiDeleteBin6Line className='text-red-600 text-xl' />
                                    </label>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
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