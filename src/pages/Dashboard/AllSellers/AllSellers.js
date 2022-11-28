import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const [verifyingSeller, setVerifyingSeller] = useState(null);

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=Seller`);
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = seller => {
        fetch(`http://localhost:5000/users/seller/${seller._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Seller verified successfully');
                    refetch();
                }
            })
    };

    const handleDeleteSeller = seller => {
        console.log(seller);
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Seller Deleted successfull');
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl my-8'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((seller, i) => <tr className='hover' key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                {
                                    seller.verified ?
                                        <td>Verified</td>
                                        :
                                        <td>
                                            <label onClick={() => setVerifyingSeller(seller)} htmlFor="popup-modal" className="btn btn-accent text-white btn-sm ">Verify</label>
                                        </td>
                                }
                                <td>
                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="popup-modal" className="btn btn-ghost">
                                        <RiDeleteBin6Line className='text-red-600 text-xl' />
                                    </label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={'Are You sure to delete?'}
                    message={`You are deleting ${deletingSeller.name} seller`}
                    successModal={handleDeleteSeller}
                    modalData={deletingSeller}
                    closeModal={setDeletingSeller}
                    action={'Delete'}
                ></ConfirmationModal>
            }
            {
                verifyingSeller && <ConfirmationModal
                    title={'Are You sure to Verify?'}
                    message={`You are verifying ${verifyingSeller.name} seller`}
                    successModal={handleVerify}
                    modalData={verifyingSeller}
                    closeModal={setVerifyingSeller}
                    action={'Verify'}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;