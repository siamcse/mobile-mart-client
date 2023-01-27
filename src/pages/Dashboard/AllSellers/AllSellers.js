import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const [verifyingSeller, setVerifyingSeller] = useState(null);
    useTitle('All Sellers')

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-mart-server-siamcse.vercel.app/users?role=Seller`);
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = seller => {
        fetch(`https://mobile-mart-server-siamcse.vercel.app/users/seller/${seller._id}`, {
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
        fetch(`https://mobile-mart-server-siamcse.vercel.app/users/${seller._id}`, {
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
            <body class="flex items-center justify-center">
                <div class="container">
                    <h2 className='text-2xl my-8'>All Sellers</h2>
                    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead class="text-white">
                            {
                                allSellers.map(seller => <tr key={seller._id} class="bg-primary flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th class="p-3 text-left">Name</th>
                                    <th class="p-3 text-left">Email</th>
                                    <th class="p-3 text-left">Verify</th>
                                    <th class="p-3 text-left" width="110px">Actions</th>
                                </tr>)
                            }
                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                allSellers.map(seller => <tr key={seller._id} class="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3">{seller.name}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{seller.email}</td>
                                    {
                                        seller.verified ?
                                            <td class="border-grey-light border italic hover:bg-gray-100 p-3 truncate">Verified</td>
                                            :
                                            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"><label onClick={() => setVerifyingSeller(seller)} htmlFor="popup-modal" className="btn btn-accent btn-xs text-white ">Verify</label></td>
                                    }
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer"><label onClick={() => setDeletingSeller(seller)} htmlFor="popup-modal" className="cursor-pointer">
                                        <RiDeleteBin6Line className='text-red-600 text-2xl' />
                                    </label></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </body>
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