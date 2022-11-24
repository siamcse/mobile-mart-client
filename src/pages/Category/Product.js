import React from 'react';

const Product = ({ product }) => {
    const { name, seller, image, originalPrice, location, description, categoryId, condition, resellPrice, posted } = product;
    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl mt-10">
                <figure className=''>
                    <img className='w-56 h-56 rounded-md' src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>Posted:{' '}
                        <span className='font-semibold'>{posted}
                        </span>
                        , Location: {' '}
                        <span className='font-semibold'>{location}</span>
                    </p>
                    <div className='flex justify-between'>
                        <p className=''><span className='font-semibold'>Original Price: </span> ${originalPrice}</p>
                        <p className=''><span className='font-semibold'>Resell Price: </span> {resellPrice}</p>
                    </div>
                    <p className=''><span className='font-semibold'>Condition: </span>{condition}</p>
                    <p className=''><span className='font-semibold'>Description: </span>{description}</p>
                    <div className="flex justify-between">
                        <p className='text-lg'><span className='font-semibold'>Seller: </span> {seller}</p>
                        <button className="btn btn-primary btn-sm">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;