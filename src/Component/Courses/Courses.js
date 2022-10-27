import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from './Category';
import './category.css'

const Courses = () => {
    const category = useLoaderData();

    return (

        <div className='grid-Container'>

            <Category category={category}></Category>
            <Outlet></Outlet>

        </div >

    );
};

export default Courses;