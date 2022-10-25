import React from 'react';

const Category = () => {
    return (
        <div className='bg-blue-400 grid grid-cols-1 m-4 shadow-black rounded'>

            <h1 className='text-center text-2xl my-2'>Course Name</h1>
            <button className="btn btn-outline col-span-1 mx-4 my-2">Wide</button>
            <button className="btn  btn-outline col-span-1  mx-4 my-2">Wide</button>
        </div>
    );
};

export default Category;