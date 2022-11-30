import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <h2>Select Role</h2>
                            <div className="flex items-center gap-6">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="radio"
                                            name="role"
                                            className="radio checked:bg-blue-500"
                                            checked
                                        />
                                        <span className="label-text ml-3">
                                            Seller
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="radio"
                                            name="role"
                                            className="radio checked"
                                            checked
                                        />
                                        <span className="label-text ml-3">
                                            Buyer
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an Account? Please,{" "}
                            <Link className="font-bold" to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
