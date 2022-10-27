import React from 'react';
import { NavLink } from 'react-router-dom';
import './category.css'

const Category = ({ category }) => {

    return (
        <div className='  grid grid-cols-1 gap-x-0 m-1 rounded-lg'>
            <div className='height width flexible bg-blue-400  shadow-black rounded-lg'>
                <h1 className='text-center text-2xl  my-2'>Course Category</h1>
                <h1 className='text-center text-xl text-slate-50 my-2'>Select Your Course</h1>
                {category.map(category =>
                    <NavLink className='text-center' key={category.id} to={`/courses/${category.category}`}>

                        <button className="btn btn-outline w-full lg:w-5/6 shadow-xl col-span-1  my-2">{category.category}</button>

                    </NavLink>)}



            </div>
        </div>
    );
};

export default Category;