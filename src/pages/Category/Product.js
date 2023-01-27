import React, { useEffect, useState } from 'react';
import { MdVerifiedUser } from "react-icons/md";

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
                {/* <div className="card md:card-side bg-base-100 shadow-xl mt-10 border border-red-500">
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
                </div> */}
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto mt-10">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}></div>

                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <p>
                                <span class="font-bold text-gray-800 dark:text-gray-200">${resellPrice}</span>
                                <span class="font-bold text-primary text-xs line-through pl-2 dark:text-primary">${originalPrice}</span>
                            </p>
                            <label htmlFor="booking-modal" onClick={() => setSelectedProduct(product)} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Buy Now</label>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">{condition}</span>
                            <label htmlFor="popup-modal" onClick={() => setReportProduct(product)} className="btn bg-teal-600 btn-sm ">Report</label>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Product;