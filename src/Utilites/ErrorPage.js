import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/162/540/original/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">404</h1>
                        <p className="mb-5">Page Not Found</p>
                        <NavLink to='/'><button className="btn btn-primary">Back To Home</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;