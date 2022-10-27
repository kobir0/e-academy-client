import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './category.css'
import Pdf from "react-to-pdf";
const ref = React.createRef();


const CourseDetails = () => {
    const data = useLoaderData();


    return (
        <div className='m-5 '>
            <div className="card lg:card-side bg-base-100 shadow-xl border">
                <figure><img className='card-img' src={data.courseImg} alt="Movie" /></figure>
                <div className="card-body">
                    <div className='flex justify-end'>
                        <Pdf targetRef={ref} filename="course.pdf">
                            {({ toPdf }) => <button className='btn btn-circle btn-outline' onClick={toPdf}><img src='https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_1280.png' alt='Download The Pdf'></img></button>}
                        </Pdf>
                    </div>


                    <div ref={ref}> <h2 className="card-title text-2xl text-violet-800">
                        {data.courseTitle}</h2>
                        <p className=''>{data.description}</p>


                        <h1 className='text-xl font-bold'> Price: <span className=' text-violet-700'> $ {data.price}</span></h1></div>


                    <h1 className='text-xl font-bold'> Rating: <span className=' text-violet-700'>{data.rating}</span></h1>


                    <div className="card-actions justify-end">
                        <NavLink to={`../CheackOut/${data.uid}`}><button className="btn btn-primary shadow-2xl">Get Premium</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;