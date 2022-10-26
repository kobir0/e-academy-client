import React from 'react';

const FQA = () => {
    return (
        <div className='  grid grid-col-1'>
            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q1: <span className='text-violet-600'>What is express js ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>

                    </div>

                </div>
            </div>
            </div>
            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q2: <span className='text-violet-600'>What is a server ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>A server is a computer program or device that provides a service to another computer program and its user, also known as the client. In a data center, the physical computer that a server program runs on is also frequently referred to as a server. That machine might be a dedicated server or it might be used for other purposes.</p>

                    </div>

                </div>
            </div>
            </div>

        </div>
    );
};

export default FQA;