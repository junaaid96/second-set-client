import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { _id, img, name, text } = category;

    return (
        <div className="card w-96 card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="" src={img} alt="category" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <Link to={`categories/${_id}`}>
                        <button className="btn btn-primary">View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
