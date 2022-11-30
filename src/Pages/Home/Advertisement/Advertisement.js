import React from "react";

const Advertisement = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl mb-6 text-center">Advertisements</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;
