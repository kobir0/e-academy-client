import React from 'react';
import './category.css'

const Card = ({ data }) => {
    return (
        <div >
            <div className="card cardHeight w-96 bg-base-100 shadow-xl m-3 image-full">
                <figure><img className='' src={data.courseImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.courseTitle}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn  btn-outline text-slate-50">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;