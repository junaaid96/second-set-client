import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useJWT from "../../customHooks/useJWT";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { existingUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState("");
    const [jwt] = useJWT(userEmail);

    const from = location.state?.from?.pathname || "/";

    if (jwt) {
        navigate(from, { replace: true });
    }

    const handleLogin = (data) => {
        console.log(data);
        setError("");
        existingUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setUserEmail(data.email);
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message);
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                })}
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <p className="text-red-600">
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                        <p>
                            New Here? Please,{" "}
                            <Link className="font-bold" to="/register">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
