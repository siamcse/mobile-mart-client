import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useTitle('Error')

    const handleLogOut = () => {
        logOut()
            .then(()=>navigate('/login'))
            .catch(e => console.log(e))
    }
    return (
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <img className='md:w-2/4' src="https://cdn.dribbble.com/users/2182116/screenshots/13933572/media/cc32730b1eb3a657a48a6ceacefc72fb.gif" alt="" />
            <div className='text-center leading-10'>
                <h1 className='text-3xl'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className='text-red-500'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p>Please <button onClick={handleLogOut} className='btn btn-ghost'>LogOut</button> and Sign In again</p>
            </div>
            <Link to='/'><button className='btn'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;