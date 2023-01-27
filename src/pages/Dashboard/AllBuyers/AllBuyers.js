import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import './AllBuyer.css';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);

    useTitle('All Buyers')

    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-mart-server-siamcse.vercel.app/users?role=User`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = buyer => {
        fetch(`https://mobile-mart-server-siamcse.vercel.app/users/${buyer._id}`, {
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
            <body class="flex items-center justify-center">
                <div class="container">
                    <h2 className='text-2xl my-8'>All Buyers</h2>
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-white">
                            {
                                allBuyers.map(buyer => <tr key={buyer._id} class="bg-primary flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th class="p-3 text-left">Name</th>
                                    <th class="p-3 text-left">Email</th>
                                    <th class="p-3 text-left" width="110px">Actions</th>
                                </tr>)
                            }
                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                allBuyers.map(buyer => <tr key={buyer._id} class="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{buyer.name}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{buyer.email}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><label onClick={() => setDeletingBuyer(buyer)} htmlFor="popup-modal" className="cursor-pointer">
                                        <RiDeleteBin6Line className='text-red-600 text-2xl' />
                                    </label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </body>

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