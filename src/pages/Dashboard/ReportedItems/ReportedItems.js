import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ReportedItems = () => {
    const [deleteReportProduct, setDeleteReportProduct] = useState(null);

    useTitle('Reported Items')

    const { data: reportedProducts = [], refetch } = useQuery({
        queryKey: ['reportProducts'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mart-server-siamcse.vercel.app/reportProducts');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteOrder = reportedProduct => {
        axios.delete(`https://mobile-mart-server-siamcse.vercel.app/reportProducts/${reportedProduct._id}`)
            .then(() => {
                refetch();
            })

        axios.delete(`https://mobile-mart-server-siamcse.vercel.app/products/${reportedProduct.productId}`)
            .then(() => {
                toast.success(`${reportedProduct.name} is delete successful from products and reported items`);
                refetch();
            })
    }

    return (
        <>{reportedProducts.length <= 0 ?
            <div className='container'>
                <h2 className='text-2xl my-8'>Reported Items</h2>
                <h3 className='text-xl font-semibold text-green-500'>There is no any reported product.</h3>
            </div>
            :
            <div className='container'>
                <body class="flex items-center justify-center">
                    <div class="container">
                        <h2 className='text-2xl my-8'>Reported Products</h2>
                        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead class="text-white">
                                {
                                    reportedProducts.map(product => <tr key={product._id} class="bg-teal-400 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-4 sm:mb-0">
                                        <th class="p-3 text-left">Name</th>
                                        <th class="p-3 text-left">Seller</th>
                                        <th class="p-3 text-left">Email</th>
                                        <th class="p-3 text-left" width="110px">Actions</th>
                                    </tr>)
                                }
                            </thead>
                            <tbody class="flex-1 sm:flex-none">
                                {
                                    reportedProducts.map(product => <tr key={product._id} class="flex flex-col flex-nowrap sm:table-row mb-4 sm:mb-0">
                                        <td class="border-grey-light border hover:bg-gray-100 p-3">{product.name}</td>
                                        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{product.seller}</td>
                                        <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{product.email}</td>
                                        <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer"><label onClick={() => setDeleteReportProduct(product)} htmlFor="popup-modal" className="cursor-pointer">
                                            <RiDeleteBin6Line className='text-red-600 text-2xl' />
                                        </label></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </body>
                {
                    deleteReportProduct && <ConfirmationModal
                        title={'Are you sure to delete?'}
                        message={`You are deleting this reported item: ${deleteReportProduct.name}. Be carefull, if delete this item cannot be recovered.`}
                        successModal={handleDeleteOrder}
                        modalData={deleteReportProduct}
                        closeModal={setDeleteReportProduct}
                        action={'Delete'}
                    >
                    </ConfirmationModal>
                }
            </div>
        }
        </>
    );
};

export default ReportedItems;