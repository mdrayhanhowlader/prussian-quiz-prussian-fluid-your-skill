import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <div className='text-center bg-violet-100 text-red-900 flex flex-col justify-center items-center py-80'>
            <h1 className='text-6xl font-bold'>404 PAGE NOT FOUND!</h1>
            <h3 className='font-semibold text-lg mb-8'>Go Back Your Home Page</h3>
            <Link to='/home' className='py-2 px-4 bg-red-700 rounded-md text-slate-100'>Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;