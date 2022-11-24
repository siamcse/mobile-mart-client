import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
    }
])