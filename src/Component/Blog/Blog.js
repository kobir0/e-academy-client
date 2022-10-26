import React from 'react';

const Blog = () => {
    return (

        <div className='  grid grid-col-1'>
            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q1: <span className='text-violet-600'>What is 'cors' ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>

                    </div>

                </div>
            </div>
            </div>

            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q2: <span className='text-violet-600'> Why are we using firebase? What other options do we have to implement authentication ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                    </div>

                </div>
            </div>
            </div>
            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q3: <span className='text-violet-600'> How does the private route work ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

                    </div>

                </div>
            </div>
            </div>


            <div className='flex justify-center'> <div className="hero w-4/6 rounded-2xl m-5  bg-base-200">
                <div className="hero-content flex-row ">

                    <div>
                        <h1 className="text-2xl font-bold">Q4: <span className='text-violet-600'> What is Node? How does Node work ?</span></h1>
                        <p className="py-6 text-xl"><span className='text-violet-600'>Answer: </span>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>

                    </div>

                </div>
            </div>
            </div>

        </div>

    );
};

export default Blog;