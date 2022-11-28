import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=User`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = buyer => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Buyer Deleted successfull');
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl my-8'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers.map((buyer, i) => <tr className='hover' key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>

                                <td>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="popup-modal" className="btn btn-ghost btn-sm ">
                                        <RiDeleteBin6Line className='text-red-600 text-xl' />
                                    </label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={'Are You sure to delete?'}
                    message={`You are deleting buyer:  ${deletingBuyer.name}`}
                    successModal={handleDeleteSeller}
                    modalData={deletingBuyer}
                    closeModal={setDeletingBuyer}
                    action={'Delete'}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;