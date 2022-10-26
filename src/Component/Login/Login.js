import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Utilites/UserContext';
import '../Courses/category.css'






const Login = () => {
    const [Error, setError] = useState('')


    const { logIn, signInWithPopGoogle, signInWithPopGitHub } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email);

        logIn(email, password)
            .then(result => {
                const resuser = result.user;
                form.reset();

            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })

    }


    const handleGooglePopUp = () => {
        signInWithPopGoogle()
            .then(res => {
                const resuser = res.user;
                console.log(resuser)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleGitHubPopUp = () => {
        signInWithPopGitHub()
            .then(res => {
                const resuser = res.user;
                console.log(resuser)
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login Now!</h1>

                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control border-none">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control border-none">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">

                                    <>New User ? <NavLink to={'../register'} className=" text-blue-600 text-lg label-text-alt link link-hover"><h1 >Sign Up Now !!</h1></NavLink></>
                                </label>
                                <p className='text-red-600'>{Error}</p>
                            </div>
                            <div className="form-control mt-6 border-none">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='flex  m-2' onClick={handleGooglePopUp}><img className='google' src='https://freesvg.org/img/1534129544.png' alt=''></img> <>Google</></button>
                                <button className='flex m-2' onClick={handleGitHubPopUp}><img className='google rounded-full ' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''></img> <>GitHub</></button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;