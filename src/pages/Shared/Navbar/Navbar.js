import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const activeClassName = 'bg-gray-600 text-md text-white rounded-md'

    const menuItem = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>About</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Blog</NavLink></li>
        <li><NavLink to='/login' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Login</NavLink></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;