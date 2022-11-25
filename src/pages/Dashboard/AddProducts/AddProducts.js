import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const currentDate = new Date();
    const date = format(currentDate, 'PPpp');



    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        const { name, resellPrice, originalPrice, condition, phone, location, description, purchaseYear, categoryId } = data;

        const formData = new FormData();

        formData.append('image', data.image[0]);
        console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgbbHashKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    const product = {
                        name,
                        image: img.data.url,
                        posted: date,
                        resellPrice,
                        originalPrice,
                        condition,
                        phone,
                        location,
                        description,
                        purchaseYear,
                        seller: user.displayName,
                        email: user.email,
                        categoryId,
                        isAvailable: true,
                        advertise: false
                    };
                    console.log(product);
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success('Product added successfully.');
                                navigate('/dashboard/myproducts');

                            }
                        })
                }
            })

    }
    return (
        <div className='my-4'>
            <h2 className='text-2xl'>Add Product</h2>
            <div>
                <form onSubmit={handleSubmit(handleAddProduct)} className=' grid grid-cols-1 gap-2'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("name")} placeholder="Product Name" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select className="input input-bordered w-full max-w-md" {...register("condition", { required: true })}>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("originalPrice")} placeholder="Product Name" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Resell Price</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("resellPrice")} placeholder="Product Name" />
                        </div>

                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("phone")} placeholder="Product Name" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("location")} placeholder="Location" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Purchase Year</span>
                            </label>
                            <input className="input input-bordered w-full max-w-md"  {...register("purchaseYear")} placeholder="Product Name" />
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="input input-bordered w-full max-w-md" {...register("categoryId", { required: true })}>
                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category._id}
                                    >{category.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" {...register('image', { required: 'Image is required' })} className="file-input w-full max-w-md" />
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="input input-bordered w-full h-24" {...register("description")} placeholder="Your phone description" />
                    </div>

                    <input className="btn btn-accent w-full" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;