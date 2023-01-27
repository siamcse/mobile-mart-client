import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://mobile-mart-server-siamcse.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='my-20 container'>
            <h2 className='text-3xl text-center font-semibold'>Categories</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10'>
                {
                    categories.map(category => <Link
                        key={category._id}
                        to={`/category/${category._id}`}
                        data-tip={category.name}
                        className='card w-36 h-36 md:h-40 md:w-40 mx-auto border-2 flex items-center justify-center shadow-xl rounded-lg tooltip'>
                        <img src={category.image} alt="" />

                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;