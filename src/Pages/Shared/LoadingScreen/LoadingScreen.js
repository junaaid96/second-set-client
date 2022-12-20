import React from "react";
import ReactLoading from "react-loading";

const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center">
            <ReactLoading type="bars" color="#5C7F67" />
            <p>Data is loading. Please wait.</p>
        </div>
    );
};

export default LoadingScreen;
