import React from "react";
import { Link } from "react-router-dom";
import banner2 from "../../../assets/images/banner2.jpg";

const Banner = () => {
    return (
        <div className="mt-6">
            <div
                className="hero h-96"
                style={{
                    backgroundImage: `url(${banner2})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">SecondSet</h1>
                        <p className="mb-5">
                            SecondSet is the right market for used and brand new
                            mobile phones where you will find out the best
                            quality second-hand mobile phones along with the
                            latest brand new phones that you are looking for.
                            Sellers of mobile phones can also increase their
                            sales on SecondSet.
                        </p>
                        <Link to="/login">
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
