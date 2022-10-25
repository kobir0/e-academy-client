import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Utilites/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://asset.gecdesigns.com/img/backgrounds/isometric-e-learning-background-template-1612282245987-cover.webp")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-slate-50">
                    <div className="max-w-md">
                        <h1 className="text-5xl my-8 font-bold">Hello '<span className='text-violet-800'>{user?.displayName ? user.displayName : 'There'}</span>'</h1>
                        <h1 className="text-3xl font-bold">Welcome To E Academy</h1>
                        <p className="py-6 text-2xl"> Discover your skills with finding the perfect course for your future destination.</p>

                        <NavLink to="/courses"><button className="btn btn-primary shadow">Explore Our Courses</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;