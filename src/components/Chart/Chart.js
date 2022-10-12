import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = ({items}) => {
    const {id, name, total} = items
    return (
        <div>
            <BarChart width={730} height={250} data={total}>
            <XAxis dataKey={name} />
            <YAxis />
            <Bar dataKey={id} fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Chart;