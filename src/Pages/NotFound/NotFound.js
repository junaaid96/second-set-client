import React from "react";
import img from "../../assets/images/not_found.png";

const NotFound = () => {
    return (
        <div>
            <img src={img} alt="not-found" className="max-h-screen m-auto p-12"/>
        </div>
    );
};

export default NotFound;
