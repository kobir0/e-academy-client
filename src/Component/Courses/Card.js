import React from 'react';
import { NavLink } from 'react-router-dom';
import './category.css'

const Card = ({ data }) => {
    return (
        <div >
            <div className="card cardHeight bg-base-100 shadow-xl m-3 image-full">
                <figure><img className='' src={data.courseImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.courseTitle}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn shadow btn-outline text-slate-50"><NavLink to={`/courses/SingleItem/${data.uid}`}>See Details</NavLink></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;