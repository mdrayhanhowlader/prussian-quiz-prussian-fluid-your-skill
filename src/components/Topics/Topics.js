import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData([])
    return (
        <div className='py-16 '>
            {/* <div className='text-center'>
                <div className='w-4/5 mx-auto h-80 bg-yellow-200 drop-shadow-2xl mb-10 mt-2 flex flex-col justify-center items-center'>
                    <h2 className='text-6xl font-semibold text-violet-900'>EXPLORE QUIZ</h2>
                    <p className='text-2xl text-violet-400'>Explore most popular quiz and build your skill, improve yourself.</p>
                </div>
            </div> */}
            <div className='w-4/5 mx-auto'>
                <div className='grid md:grid-cols-4 gap-4'>
                    {
                        topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;