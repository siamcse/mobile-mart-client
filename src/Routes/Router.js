import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
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
import PrivateRoutes from "./PrivateRoutes";

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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
                element: <AllSellers />
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers />
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems />
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProduct />
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])