import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers/AllSellers";
import MyBuyers from "../pages/Dashboard/MyBuyers/MyBuyers";
import MyOrder from "../pages/Dashboard/MyOrders/MyOrder";
import MyProduct from "../pages/Dashboard/MyProduct/MyProduct";
import ReportedItems from "../pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Category /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://mobile-mart-server-siamcse.vercel.app/products/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrder />
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoutes><AllSellers /></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers /></AdminRoutes>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoutes><ReportedItems /></AdminRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoutes><AddProducts /></SellerRoutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoutes><MyProduct /></SellerRoutes>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoutes><MyBuyers /></SellerRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`https://mobile-mart-server-siamcse.vercel.app/bookings/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
            },
        ]
    }
])