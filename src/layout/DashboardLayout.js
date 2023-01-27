// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthProvider';
// import useAdmin from '../hooks/useAdmin';
// import useSeller from '../hooks/useSeller';
// import Loader from '../pages/Shared/Loader/Loader';
// import Navbar from '../pages/Shared/Navbar/Navbar';

// const DashboardLayout = () => {
//     const { user } = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = useAdmin(user?.email);
//     const [isSeller, isSellerLoading] = useSeller(user?.email);

//     if (isAdminLoading || isSellerLoading) {
//         return <Loader></Loader>
//     }
//     return (
//         <div>
//             <Navbar />
//             {/* <div className="drawer drawer-mobile drawer-end">
//                 <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content ml-6">
//                     <Outlet />
//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-72 bg-gray-700 border-r-2 text-white rounded-lg">
//                         {
//                             !isAdmin && !isSeller &&
//                             <li><Link to='/dashboard/myorder'>My Orders</Link></li>

//                         }
//                         {
//                             !isAdmin && isSeller &&
//                             <>
//                                 <li><Link to='/dashboard/addproduct'>Add A product</Link></li>
//                                 <li><Link to='/dashboard/myproducts'>My Products</Link></li>
//                                 <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
//                             </>
//                         }
//                         {
//                             isAdmin && !isSeller &&
//                             <>
//                                 <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
//                                 <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
//                                 <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
//                             </>
//                         }
//                     </ul>
//                 </div>
//             </div> */}
//         </div>
//     );
// };

// export default DashboardLayout;