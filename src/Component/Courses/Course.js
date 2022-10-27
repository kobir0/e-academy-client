import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Card from './Card';

const Course = () => {
    const data = useLoaderData()
    const course = data[0];

    return (
        <div className='text-center'>
            <h1 className='text-2xl m-2'>Category Name: <span className='text-violet-500'> {course.category}</span></h1>
            <h1 className='text-xl '>Total Course: <span className='text-violet-500'> {data.length}</span></h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-6'>
                {data.map(data => <Card key={data.uid} data={data}></Card>)}
            </div>


        </div>
    );
};

export default Course;