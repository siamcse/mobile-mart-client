import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { login, popUpSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        const { email, password } = data;
        setLoginEmail('');
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(user.email);
                toast.success('Login successfully');
            })
            .catch(e => setLoginError(e.message))
    };

    const handleGoogleSignIn = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    name: user.displayName,
                    email: user.email,
                    role: 'User'
                };
                saveUser(currentUser);

            })
            .catch(e => setLoginError(e.message))
    };
    //save google sign up user to database
    const saveUser = (user) => {
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Login successfully');
                }
                setLoginEmail(user?.email);
            })
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 shadow-xl p-3'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' className="input input-bordered w-full max-w-md" {...register("email", {
                            required: 'Email address is required'
                        })} placeholder="Email" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className="input input-bordered w-full max-w-md" {...register("password", {
                            required: 'Password is required'
                        })} placeholder="password" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <p className='text-xs mt-2'><span>Forgot Password?</span></p>
                    {loginError && <p className='text-red-600 text-sm'>{loginError}</p>}
                    <input className="btn btn-accent mt-4 w-full max-w-md text-white" type="submit" value='Login' />
                </form>
                <p>New user? <Link to='/signup' className='text-green-500'>Please Sign Up</Link></p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline mt-4 w-full max-w-md'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;