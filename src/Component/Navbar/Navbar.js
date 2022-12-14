import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Utilites/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(res => {
                const resUser = res.user;
                console.log(resUser)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            <div className="navbar bg-blue-500 shadow-xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/home"}>Home</NavLink></li>
                            <li><NavLink to={"/courses"}>Courses</NavLink></li>

                            <li><NavLink to={"/blog"}>Blog</NavLink></li>
                            <li><NavLink to={"/faq"}>FAQ</NavLink></li>



                        </ul>
                    </div>

                    <div className='h-12 w-12'><img src='https://play-lh.googleusercontent.com/wgnK61o8_kNBCpcNV5qbGTT7WA8qwo8ZrAjIQhQAp5RSze9kU4acY6DDKQ-0Q5agX4c' alt=''></img></div>


                </div >


                <div className='navbar-center'>   <NavLink to='home' className="btn p-none btn-ghost btn-sm border-black ">
                    <h1 className='normal-case text-slate-50  text-lg'>E-Academy
                    </h1>
                </NavLink></div>



                <div className="navbar-end ">




                    <div className='m-1 sm:m-0'>
                        <label className="swap swap-rotate">


                            <input type="checkbox" />


                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>

                    <div className='m-1'>{user?.uid ? <NavLink to='/register'><button className="btn btn-circle "><p className='text-xs'>Sign Up</p></button>
                    </NavLink> : <NavLink to='/login'> <button className="btn btn-circle">Sign In</button></NavLink>}</div>


                    <div className="tooltip tooltip-left tooltip-warning" data-tip={user?.displayName ? user.displayName : ''}>
                        < >
                            <div className="dropdown dropdown-end">

                                <label tabIndex={0} className="btn m-1 sm:m-1 btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">

                                        {user?.photoURL ? <img src={user.photoURL} alt='' /> : <img src="https://365psd.com/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg" alt='' />}

                                    </div>
                                </label>
                                <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">



                                    <li><button onClick={handleLogout}>Log Out</button></li>


                                </ul>
                            </div>
                        </>
                    </div>


                </div>

            </div>
        </div >
    );
};

export default Navbar;