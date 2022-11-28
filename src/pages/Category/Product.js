import React, { useEffect, useState } from 'react';
import { MdVerifiedUser } from "react-icons/md";
import useTitle from '../../hooks/useTitle';

const Product = ({ product, setSelectedProduct, setReportProduct }) => {
    const { name, email, image, originalPrice, location, description, paid, condition, resellPrice, posted } = product;
    const [seller, setSeller] = useState({});

    useEffect(() => {
        if (email) {
            fetch(`https://mobile-mart-server-siamcse.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.seller);
                })
        }
    }, [email]);

    return (
        <> {!paid &&
            <div>
                <div className="card md:card-side bg-base-100 shadow-xl mt-10 border border-red-500">
                    <figure className=''>
                        <img className='w-64 min-h-full p-1 rounded-xl' src={image} alt={name} />
                    </figure>
                    <div className="card-body gap-0 p-4">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-sm'>Posted:{' '}
                            <span className='font-semibold'>{posted}
                            </span>
                            {" "} | Location: {' '}
                            <span className='font-semibold'>{location}</span>
                        </p>
                        <p className=''><span className='font-semibold'>Original Price: </span> ${originalPrice}</p>
                        <p className=''><span className='font-semibold'>Resell Price: </span> {resellPrice}</p>
                        <p className=''><span className='font-semibold'>Condition: </span>{condition}</p>
                        <p className=''><span className='font-semibold'>Description: </span>{description}</p>
                        <div className="flex justify-between">
                            <p className='text-lg flex items-center'>
                                <span className='font-semibold mr-2'>Seller: </span>{" "} {seller?.name}
                                {
                                    seller.verified &&
                                    <MdVerifiedUser className='text-blue-600 ml-2' />
                                }
                            </p>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="popup-modal" onClick={() => setReportProduct(product)} className="btn bg-red-600 btn-sm ">Report to Admin</label>
                                <label htmlFor="booking-modal" onClick={() => setSelectedProduct(product)} className="btn btn-accent btn-sm">Book Now</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Product;