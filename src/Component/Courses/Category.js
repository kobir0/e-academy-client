import React from 'react';
import { NavLink } from 'react-router-dom';
import './category.css'

const Category = ({ category }) => {

    return (
        <div className='  grid grid-cols-1 gap-x-0 m-4 rounded-lg'>
            <div className='height width flexible bg-blue-400  shadow-black rounded-lg'>
                <h1 className='text-center text-2xl  my-2'>Course Name</h1>
                {category.map(category => <button key={category.id} className="btn btn-outline col-span-1 mx-4 my-2"><NavLink to={`/courses/${category.category}`}>{category.category}</NavLink></button>)}



            </div>
        </div>
    );
};

export default Category;