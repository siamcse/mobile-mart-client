import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-semibold'>Categories {categories.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                {
                    categories.map(category => <Link
                        key={category._id}
                        to={`/category/${category._id}`}
                        className='shadow-xl bg-gray-700 text-white rounded-lg'>
                        <h2 className='text-4xl text-center p-12'>{category.name}</h2>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;