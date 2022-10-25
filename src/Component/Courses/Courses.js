import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from './Category';
import Course from './Course';

const Courses = () => {
    return (
        <div className='grid grid-cols-3'>
            <Category className='col-span-1'></Category>
            <Course></Course>
        </div >
    );
};

export default Courses;