import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData([]).data
    
    return (
        <div>
            <h2 className='text-center text-3xl text-violet-500 font-semibold py-4 mb-4'>Quiz Categories: {topics.length}</h2>

            <div className='mx-auto'>
            <ResponsiveContainer width="90%" height={300}>
            <LineChart data={topics}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
            </div>

            <div className='text-center mt-8'>
            <Link className='py-4 px-8 text-center bg-violet-500 text-slate-200 hover:bg-pink-400 rounded-md' to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default Statistics;