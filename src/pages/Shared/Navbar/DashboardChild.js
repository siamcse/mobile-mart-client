import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const DashboardChild = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div className='absolute w-full left-0 top-full bg-white text-gray-600 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300'>
            {
                !isAdmin && !isSeller &&
                <>
                    <Link to='/dashboard/myorder' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className=' text-sm'>My Orders</span>
                    </Link>
                </>

            }
            {
                !isAdmin && isSeller &&
                <>
                    <Link to='/dashboard/addproduct' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className=' text-sm'>Add Product</span>
                    </Link>
                    <Link to='/dashboard/myproducts' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className=' text-sm'>My Products</span>
                    </Link>
                    <Link to='/dashboard/mybuyers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className=' text-sm'>My Buyers</span>
                    </Link>
                </>
            }
            {
                isAdmin && !isSeller &&
                <>
                    <Link to='/dashboard/allsellers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className=' text-sm'>All Sellers</span>
                    </Link>
                    <Link to='/dashboard/allbuyers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className='text-sm'>All Buyers</span>
                    </Link>
                    <Link to='/dashboard/reporteditems' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                        <span className='text-sm'>Reported Items</span>
                    </Link>
                </>
            }

        </div>
    );
};

export default DashboardChild;