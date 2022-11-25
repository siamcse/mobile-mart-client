import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const activeClassName = 'bg-gray-600 text-md text-white rounded-md';

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const menuItem = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Home</NavLink></li>

        <li><NavLink to='/blog' className={({ isActive }) =>
            isActive ? activeClassName : undefined
        }>Blog</NavLink></li>

        {
            user?.email ?
                <>
                    <li><NavLink to='/dashboard' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Dashboard</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }><button onClick={handleLogOut}>LogOut</button></NavLink></li>
                </>
                :
                <li><NavLink to='/login' className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Login</NavLink></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Mobile Mart</Link>
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
            </div>
        </div>
    );
};

export default Navbar;