import React from 'react';
import { NavLink } from 'react-router-dom';
import './category.css'

const Category = ({ category }) => {

    return (
        <div className='  grid grid-cols-1 gap-x-0 m-4 rounded-lg'>
            <div className='height width flexible bg-blue-400  shadow-black rounded-lg'>
                <h1 className='text-center text-2xl  my-2'>Course Category</h1>
                <h1 className='text-center text-xl text-slate-50 my-2'>Select Your Course</h1>
                {category.map(category =>
                    <NavLink className='text-center' to={`/courses/${category.category}`}>

                        <button key={category.id} className="btn btn-outline w-5/6  shadow-xl col-span-1 mx-2 my-2">{category.category}</button>

                    </NavLink>)}



            </div>
        </div>
    );
};

export default Category;