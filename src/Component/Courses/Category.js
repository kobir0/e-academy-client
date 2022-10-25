import React from 'react';
import './category.css'

const Category = () => {
    return (
        <div className=' grid grid-cols-1 gap-x-0 m-4 shadow-black rounded-lg'>
            <div className='height width flexible bg-blue-400 rounded-lg'>
                <h1 className='text-center text-2xl  my-2'>Course Name</h1>
                <button className="btn btn-outline col-span-1 mx-4 my-2">Wide</button>
                <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button>
                <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button>
                <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button>
                <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button>
                <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button></div>
        </div>
    );
};

export default Category;