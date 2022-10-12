import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData([])
    return (
        <div className='py-16 '>

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