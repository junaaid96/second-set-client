import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Product = ({ product }) => {
    const {
        name,
        picture,
        location,
        resale_price,
        original_price,
        year_of_use,
        seller_name,
    } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-96">
                <img src={picture} alt="phone" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Resale Price: {resale_price} BDT</p>
                <p>Original Price: {original_price}</p>
                <p>
                    Year of use:{" "}
                    {year_of_use > 1
                        ? `${year_of_use} years`
                        : `${year_of_use} year`}
                </p>
                <div className="flex items-center justify-between mt-12">
                    <div>
                        <p className="indicator">
                            <span className="indicator-item badge bg-blue-600">
                                <TiTickOutline />
                            </span>
                            Seller: <strong>{seller_name}</strong>
                        </p>
                        <p>Location: {location}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
