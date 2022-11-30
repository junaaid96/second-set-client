import React from "react";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";

const Banner = () => {
    return (
        <div className="mt-6">
            <div className="carousel w-full h-96 rounded">
                <div id="banner1" className="carousel-item w-full">
                    <img src={banner1} className="w-full" alt="banner1" />
                </div>
                <div id="banner2" className="carousel-item w-full">
                    <img src={banner2} className="w-full" alt="banner2" />
                </div>
                <div id="banner3" className="carousel-item w-full">
                    <img src={banner3} className="w-full" alt="banner3" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#banner1" className="btn btn-xs">
                    1
                </a>
                <a href="#banner2" className="btn btn-xs">
                    2
                </a>
                <a href="#banner3" className="btn btn-xs">
                    3
                </a>
            </div>
        </div>
    );
};

export default Banner;
