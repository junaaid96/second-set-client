import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    // const onSubmit = (data) => console.log(data);
    const navigate = useNavigate();

    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        navigate("/");
                        console.log("User Name Updated Successfully");
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: "Name is Required",
                                })}
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
                                {...register("email", {
                                    required: "Email is Required",
                                })}
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
                                {...register("password", {
                                    required: "Password is Required",
                                })}
                                type="password"
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
                                            {...register("role")}
                                            type="radio"
                                            className="radio checked:bg-blue-500"
                                            value="seller"
                                        />
                                        <span className="label-text ml-3">
                                            Seller
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input
                                            {...register("role")}
                                            type="radio"
                                            className="radio checked"
                                            value="buyer"
                                        />
                                        <span className="label-text ml-3">
                                            Buyer
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an Account? Please,{" "}
                            <Link className="font-bold" to="/login">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
