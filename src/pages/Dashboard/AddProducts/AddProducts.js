import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const handleAddProduct = data => {
        console.log(data);
        const { name, image, resellPrice, originalPrice, condition, phone, location, description, purchaseYear } = data;
        const product = {
            name,
            image,
            posted: new Date(),
            resellPrice,
            originalPrice,
            condition,
            phone,
            location,
            description,
            purchaseYear,
            seller: user.name,
            email: user.email,
        };
        console.log(product);
    }
    return (
        <div className=''>
            <h2 className='text-2xl my-8'>Add Product</h2>
            <div>
                <form onSubmit={handleSubmit(handleAddProduct)} className=' grid grid-cols-1 gap-4'>
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
                                <option value="A">Excellent</option>
                                <option value="">Good</option>
                                <option value="B">Fair</option>
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
                            <select className="input input-bordered w-full max-w-md" {...register("category", { required: true })}>
                                <option value="">Select...</option>
                                <option value="A">Option A</option>
                                <option value="B">Option B</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="input input-bordered w-full h-24" {...register("description")} placeholder="Your phone description" />
                    </div>

                    <input className="btn btn-secondary w-full" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;