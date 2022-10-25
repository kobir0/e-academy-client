import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Course = () => {
    const data = useLoaderData()

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6'>
            {data.map(data => <Card key={data.uid} data={data}></Card>)}
        </div>
    );
};

export default Course;