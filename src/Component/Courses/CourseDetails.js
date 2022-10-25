import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './category.css'


const CourseDetails = () => {
    const data = useLoaderData();
    return (
        <div className='m-5 '>
            <div className="card lg:card-side bg-base-100 shadow-xl border">
                <figure><img className='card-img' src={data.courseImg} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-violet-800"> {data.courseTitle}</h2>
                    <p className=''>{data.description}</p>
                    <h1 className='text-xl font-bold text-violet-700'> Price: {data.price}</h1>
                    <h1 className='text-xl font-bold'> Rating: {data.rating}</h1>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get Premium</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;