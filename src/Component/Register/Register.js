import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Utilites/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [Error, setError] = useState('')
    const { createUser, updateProfileInfo, logOut } = useContext(AuthContext);
    const notify = () => toast("Wow so easy!");


    const handleSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        const password = from.password.value;
        const email = from.email.value;
        const name = from.name.value;
        const url = from.url.value;


        console.log(password, email, name, url);

        createUser(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                handleUpdateprofile(name, url);
                console.log("signed", user)
                toast.success('Your Account has been created succesfully !!',
                    {
                        icon: '👏',
                        style: {
                            borderRadius: '10px',
                        },
                        autoClose: 1200, position: 'top-center'
                    });

                from.reset();



            })
            .catch((error => {
                setError(error.message)
                console.log(error)
            })

            )



    }

    logOut()
        .then(() => { })
        .catch(err => {
            console.error(err)
        })


    const handleUpdateprofile = (name, url) => {
        const profile = { displayName: name, photoURL: url }
        updateProfileInfo(profile)
            .then(() => { })
            .catch(err => {
                console.error(err)
            })


    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register Here!!</h1>

                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control border-none">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control border-none">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input name="url" type="text" placeholder="Url" className="input input-bordered" required />
                            </div>
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

                                    <>Already have an account ? <NavLink to={'../login'} className=" text-teal-600 text-lg label-text-alt link link-hover"><h1 >Log In Now !!</h1></NavLink></>
                                </label>
                                <p className='text-red-600'>{Error}</p>
                            </div>
                            <div className="form-control mt-6 border-none">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;