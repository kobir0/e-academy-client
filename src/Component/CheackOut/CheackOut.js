import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheackOut = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className=' flex justify-center '>
                <div className="hero w-3/6 rounded-2xl m-5  bg-base-200">
                    <div className="hero-content flex-row ">

                        <div>
                            <h1 className="text-2xl font-bold">Selected Course: <span className='text-violet-600'>{data.courseTitle}</span></h1>
                            <p className="py-6 text-xl">Price:$ {data.price}</p>
                            <button className="btn btn-primary">Add To Shipment</button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-violet-600 font-bold text-3xl'>Our Premium Plans</h1>

            <div>
                <div className='grid grid-cols-2'>
                    <div className="hero w-5/6  rounded-2xl m-5 bg-slate-600">
                        <div className="hero-content flex-row ">

                            <div>
                                <h1 className="text-2xl text-slate-50 text-center font-bold">Our Monthly Plan</h1>
                                <h1 className='font-bold text-center text-2xl text-slate-50 '>$49 – $79 /month</h1>

                                <div className=' text-slate-100'>
                                    <p className='my-2'> + AccessAll courses and Specializations  leading companies and universities</p>
                                    <p className='my-2'> + Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more</p>
                                    <p className='my-2'> + Earn unlimited certificates</p>

                                </div>

                                <div className='text-center my-4'><button className="btn btn-primary ">Buy This Premium</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="hero w-5/6  rounded-2xl m-5 bg-slate-600">
                        <div className="hero-content flex-row ">

                            <div>
                                <h1 className="text-2xl text-slate-50 text-center font-bold">Our Yearly Plan</h1>
                                <h1 className='font-bold text-center text-2xl text-slate-50 '>$300 – $500 /month</h1>

                                <div className=' text-slate-100'>
                                    <p className='my-2'> + Save when you pay up front for the year</p>
                                    <p className='my-2'> + Enjoy maximum flexibility to achieve work/life balance and learn at your own pace</p>
                                    <p className='my-2'> + Full Acces of All Courses</p>

                                </div>

                                <div className='text-center my-4'><button className="btn btn-primary ">Buy This Premium</button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheackOut;