import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaSistrix, FaRegHeart, FaUserAlt } from "react-icons/fa";
import { AiOutlineBars, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const activeClassName = 'bg-gray-600 text-md text-white rounded-md';

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful');
            })
            .catch(e => console.error(e))
    }

    const menuItem = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Home</NavLink></li>

        <li><NavLink to='/blog' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Blog</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Contact</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>About</NavLink></li>

        {
            user?.email ?
                <>
                    <li><NavLink to='/dashboard' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Dashboard</NavLink></li>
                    <li>
                        <button onClick={handleLogOut}>LogOut</button>
                    </li>
                    {/* <p className='text-lg outline rounded-full px-3 hover:bg-slate-300 flex items-center justify-center'>{user?.displayName}</p> */}
                </>
                :
                <li><NavLink to='/login' className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Login</NavLink></li>
        }

    </>
    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='container flex items-center justify-between'>
                {/* logo */}
                <div>
                    <Link to='/' className='text-2xl'>Mobile <span className='text-primary'>Mart</span></Link>
                </div>
                {/* searchbar */}
                <div className='w-full relative max-w-xl flex'>
                    <span className='absolute left-4 top-4 text-lg text-gray-400'>
                        <FaSistrix></FaSistrix>
                    </span>
                    <input type="text" className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='Search' />
                    <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition'>Search</button>
                </div>
                {/* icon */}
                <div className='flex items-center space-x-4'>
                    <button className='text-center  text-gray-700 relative'>
                        <div className='text-2xl ml-3'>
                            <FaRegHeart className='text-center'></FaRegHeart>
                        </div>
                        <div className='text-xs leading-3 hover:text-primary transition'>Wish List</div>
                        <span className='absolute right-0 -top-1 h-5 w-5 bg-primary text-white rounded-full flex items-center justify-center '>6</span>
                    </button>
                    <button className='text-center  text-gray-700 relative'>
                        <div className='text-2xl'>
                            <AiOutlineShoppingCart className='text-center'></AiOutlineShoppingCart>
                        </div>
                        <div className='text-xs leading-3 hover:text-primary transition'>Cart</div>
                        <span className='absolute -right-3 -top-1 h-5 w-5 bg-primary text-white rounded-full flex items-center justify-center'>8</span>
                    </button>
                    <button className='text-center  text-gray-700  relative'>
                        <div className='text-2xl ml-3'>
                            <FaUserAlt className='text-center'></FaUserAlt>
                        </div>
                        <div className='text-xs leading-3 hover:text-primary transition'>Account</div>
                    </button>

                </div>

            </div>
            <nav className='bg-gray-800 mt-8'>
                <div className='container flex'>
                    {/* all categories  */}
                    <div className='bg-primary flex items-center cursor-pointer px-8 py-4 relative group'>
                        <span className='text-white'>
                            <AiOutlineBars></AiOutlineBars>
                        </span>
                        <span className='ml-2 text-white'>All Categories</span>

                        <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-dashed divide-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                            <Link className='py-3 px-6 flex items-center hover:bg-gray-200'>
                                <img src="" alt="" className='w-5 h-5 object-contain' />
                                <span className='ml-6 text-gray-600 text-sm'>Samsung</span>
                            </Link>
                            <Link className='py-3 px-6 flex items-center hover:bg-gray-200'>
                                <img src="" alt="" className='w-5 h-5 object-contain' />
                                <span className='ml-6 text-gray-600 text-sm'>Samsung</span>
                            </Link>
                            <Link className='py-3 px-6 flex items-center hover:bg-gray-200'>
                                <img src="" alt="" className='w-5 h-5 object-contain' />
                                <span className='ml-6 text-gray-600 text-sm'>Samsung</span>
                            </Link>
                            <Link className='py-3 px-6 flex items-center hover:bg-gray-200'>
                                <img src="" alt="" className='w-5 h-5 object-contain' />
                                <span className='ml-6 text-gray-600 text-sm'>Samsung</span>
                            </Link>

                        </div>
                    </div>
                    {/* navbar link  */}
                    <div className='flex items-center justify-between flex-grow pl-12'>
                        <div className='flex items-center space-x-6 capitalize'>
                            <Link to='/' className='text-gray-200 hover:text-white transition'>Home</Link>
                            <Link to='/blog' className='text-gray-200 hover:text-white transition'>Blog</Link>
                            <Link to='/about' className='text-gray-200 hover:text-white transition'>About</Link>
                            <Link to='/contact' className='text-gray-200 hover:text-white transition'>Contact</Link>

                            <div className='relative flex items-center cursor-pointer py-4 group'>
                                <div className='text-gray-200 hover:text-white transition'>Dashboard</div>
                                <span className='text-white ml-1'>
                                    <IoIosArrowDown></IoIosArrowDown>
                                </span>

                                <div className='absolute w-full left-0 top-full bg-white text-gray-600 shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300'>
                                    <Link to='/dashboard/allsellers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                                        <span className=' text-sm'>All Sellers</span>
                                    </Link>
                                    <Link to='/dashboard/allbuyers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                                        <span className='text-sm'>All Buyers</span>
                                    </Link>
                                    <Link to='/dashboard/allsellers' className='py-3 px-3 flex items-center hover:bg-primary hover:text-white'>
                                        <span className='text-sm'>Reported Items</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <Link to='/' className='text-gray-200 hover:text-white transition'>Login/Register</Link>
                    </div>
                </div>

            </nav>
            {/* <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl ml-20">Mobile Mart</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={2} htmlFor="dashboard-drawer" className="drawer-button btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </nav> */}
        </header>
    );
};

export default Navbar;