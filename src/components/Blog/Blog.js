import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto'>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>How does React works!</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>Between difference props and state</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='bg-slate-300 rounded my-6 p-4'>
                <h2 className='font-semibold text-2xl'>How many ways use useEffect without loading data from api?</h2>
                <p>loading..............................</p>
            </div>
            </div>
            
        <div className='text-center mt-12'>
        <Link className='py-4 px-8 text-center bg-violet-500 text-slate-200 hover:bg-pink-400 rounded-md' to='/'>Back To Home</Link>
        </div>
        </div>
    );
};

export default Blog;