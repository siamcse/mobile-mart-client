import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaSistrix, FaRegHeart, FaUserAlt } from "react-icons/fa";
import { AiOutlineBars, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import DashboardChild from './DashboardChild';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful');
            })
            .catch(e => console.error(e))
    }

    return (
        <header className='py-4 shadow-sm bg-white'>
            <div className='container flex items-center justify-between'>
                {/* logo */}
                <div>
                    <Link to='/' className='text-2xl'>Mobile <span className='text-primary'>Mart</span></Link>
                </div>
                {/* searchbar */}
                <div className='w-full relative max-w-xl hidden md:block'>
                    <div className='flex'>
                        <span className='absolute left-4 top-4 text-lg text-gray-400'>
                            <FaSistrix></FaSistrix>
                        </span>
                        <input type="text" className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='Search' />
                        <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition'>Search</button>
                    </div>
                </div>
                {/* icon */}
                <div className='flex items-center space-x-4'>
                    <button className='text-center  text-gray-700 relative hidden sm:block'>
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
                    {
                        user?.email &&
                        <div className="dropdown dropdown-left">
                            <label tabIndex={0} className="text-center  text-gray-700  relative"><div className='text-2xl ml-3'>
                                <FaUserAlt className='text-center'></FaUserAlt>
                            </div>
                                <div className='text-xs leading-3 hover:text-primary transition'>Account</div></label>
                            <div tabIndex={0} className="dropdown-content menu items-center justify-between p-3 shadow bg-base-100 rounded-md divide-y divide-slate-600 divide-dashed">
                                <p>Profile</p>
                                <p className='capitalize py-3'>{user?.email.split('@')[0]}</p>
                                <button onClick={handleLogOut} className='py-3 btn bg-primary'>LogOut</button>
                            </div>
                        </div>
                    }

                </div>

            </div>
            <nav className='bg-gray-800 mt-8'>
                <div className='container flex justify-between md:justify-start items-center'>
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
                    <div className='hidden md:block'>
                        <div className='flex items-center justify-between gap-6 py-4 flex-grow pl-6 md:pl-12'>
                            <div className='flex items-center space-x-6 capitalize'>
                                <Link to='/' className='text-gray-200 hover:text-white transition'>Home</Link>
                                <Link to='/blog' className='text-gray-200 hover:text-white transition'>Blog</Link>
                                <Link to='/about' className='text-gray-200 hover:text-white transition'>About</Link>
                                <Link to='/contact' className='text-gray-200 hover:text-white transition'>Contact</Link>

                                {
                                    user?.email &&
                                    <div className='relative flex items-center cursor-pointer group'>
                                        <div className='text-gray-200 hover:text-white transition'>Dashboard</div>
                                        <span className='text-white ml-1'>
                                            <IoIosArrowDown></IoIosArrowDown>
                                        </span>


                                        <DashboardChild />
                                    </div>
                                }
                            </div>
                            {
                                !user?.email &&
                                <>
                                    <Link to='/login' className='text-gray-200 hover:text-white transition'>Login</Link>
                                    <Link to='/signup' className='text-gray-200 hover:text-white transition'>Sign Up</Link>
                                </>

                            }
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="inline-flex p-2 ml-5 text-white  transition-all duration-200 rounded-md md:hidden"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {navbarOpen && (
                <nav
                    className="py-4 bg-white shadow-md lg:hidden"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                >
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                                Menu
                            </p>

                            <button
                                type="button"
                                className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className='flex flex-col items-center justify-between gap-6 py-4 flex-grow pl-6 md:p-12'>
                                <Link to='/' className='text-gray-800 transition'>Home</Link>
                                <Link to='/blog' className='text-gray-800 transition'>Blog</Link>
                                <Link to='/about' className='text-gray-800 transition'>About</Link>
                                <Link to='/contact' className='text-gray-800 transition'>Contact</Link>

                                {
                                    user?.email &&
                                    <div className='relative flex items-center cursor-pointer group'>
                                        <div className='text-gray-800 transition'>Dashboard</div>
                                        <span className='ml-1'>
                                            <IoIosArrowDown></IoIosArrowDown>
                                        </span>


                                        <DashboardChild />
                                    </div>
                                }
                                {
                                    !user?.email &&
                                    <>
                                        <Link to='/login' className='text-gray-800 transition'>Login</Link>
                                        <Link to='/signup' className='text-gray-800 transition'>SignUp</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;