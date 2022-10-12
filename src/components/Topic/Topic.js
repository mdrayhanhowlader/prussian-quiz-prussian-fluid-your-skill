import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, name, logo} = topic

    return (
        <div className='shadow-lg hover:shadow-2xl bg-blend-overlay shadow-violet-200'>
            <div className="bg-black rounded-md">
                <img className='w-full mx-auto' src={logo} alt="" />
            </div>
            <div className='flex justify-between items-center py-1 px-1'>
                <h4 className='text-violet-500 font-semibold'>{name}</h4>
                <Link to={`/quiz/${id}`} className='bg-violet-500 text-white p-2 rounded hover:bg-violet-900 hover:shadow-lg hover:shadow-violet-200 font-medium'>
                    
                Explore
                </Link>
            </div>
        </div>
    );
};

export default Topic