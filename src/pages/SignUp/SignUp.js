import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleSignUp = data => {
        const { email, password, name, role } = data;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    name,
                    email,
                    role
                };
                saveUser(currentUser);
            })
            .catch(e => {
                console.log(e);
            })
    };
    //save user to database
    const saveUser = (user) => {
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Sign Up successfully');
                    navigate('/');
                }
            })
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 shadow-xl p-3'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select defaultValue='User' className="select select-bordered w-full max-w-md" {...register("role", {
                            required: 'Role is required'
                        })}>
                            <option>User</option>
                            <option>Seller</option>
                        </select>
                        {errors.role && <p className='text-red-500'>{errors.role?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='name' className="input input-bordered w-full max-w-md" {...register("name", {
                            required: 'Name is required'
                        })} placeholder="Name" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>

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
                    <input className="btn btn-accent mt-4 w-full max-w-md text-white" type="submit" value='Login' />
                </form>
                <p>Already have an account <Link to='/login' className='text-green-500'>Please Login</Link></p>
                <button className='btn btn-outline mt-4 w-full max-w-md'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignUp;