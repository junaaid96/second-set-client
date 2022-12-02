import React from "react";

const AdvertisedProduct = ({advertisedProduct}) => {
    const {picture, name, resale_price, original_price, year_of_use, seller_name, location } = advertisedProduct;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-96">
                <img
                    src={picture}
                    alt="phone"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">Available</div>
                </h2>
                <p>Resale Price: {resale_price}</p>
                <p>Original Price: {original_price}</p>
                <p>Year of Use: {year_of_use}</p>
                <p>Seller Name: {seller_name}</p>
                <p>Location: {location}</p>
            </div>
        </div>
    );
};

export default AdvertisedProduct;
