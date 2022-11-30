import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import useJWT from "../../customHooks/useJWT";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState("");
    const [jwt] = useJWT(userEmail);
    const navigate = useNavigate();

    if (jwt) {
        navigate("/");
    }

    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                const userInformation = {
                    displayName: data.name,
                };
                updateUser(userInformation)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setUserEmail(email);
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
                            {errors.name && (
                                <p className="text-red-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email is Required",
                                })}
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <p className="text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
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
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
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
                                            value="user"
                                            checked
                                        />
                                        <span className="label-text ml-3">
                                            User
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                    </form>
                    <p className="mb-6 ml-6">
                        Already have an Account? Please,{" "}
                        <Link className="font-bold" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
