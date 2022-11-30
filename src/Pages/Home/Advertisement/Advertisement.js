import React from "react";

const Advertisement = () => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl mb-6 text-center">Advertisements</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/model-banner/p50-pro-black.png"
                        alt="phone"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        dummy phone
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: 0</p>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;
