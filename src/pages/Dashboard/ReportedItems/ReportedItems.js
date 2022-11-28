import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ReportedItems = () => {
    const [deleteReportProduct, setDeleteReportProduct] = useState(null);
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
            <>
                <h2 className='text-2xl my-8'>Reported Items</h2>
                <h3 className='text-xl font-semibold text-green-500'>There is no any reported product.</h3>
            </>
            :
            <div>
                <h2 className='text-2xl my-8'>Reported Items</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Seller</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportedProducts.map((reportedProduct, i) => <tr key={reportedProduct._id}>
                                    <th>{i + 1}</th>
                                    <td>{reportedProduct.name}</td>
                                    <td>{reportedProduct.seller}</td>
                                    <td>{reportedProduct.email}</td>
                                    <td>
                                        <label onClick={() => setDeleteReportProduct(reportedProduct)} htmlFor="popup-modal" className="btn btn-ghost">
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