import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from './Category';
import Course from './Course';
import './category.css'

const Courses = () => {
    return (

        <div className='grid-Container'>

            <Category className=''></Category>



            <Course className=''></Course>

        </div >

    );
};

export default Courses;