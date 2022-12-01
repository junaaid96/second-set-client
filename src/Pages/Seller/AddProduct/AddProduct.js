import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const pictureHostingKey = process.env.REACT_APP_imgbb_api;
    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${pictureHostingKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        category: data.category,
                        picture: imgData.data.url,
                        name: data.name,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        year_of_use: data.year_of_use,
                        seller_name: user.name,
                        isBooked: false,
                        seller_email: user.email,
                    };

                    // save doctor information to the database
                    fetch("https://second-set-server.vercel.app/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            // authorization: `bearer ${localStorage.getItem(
                            //     "accessToken"
                            // )}`,
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate("/myProducts");
                        });
                }
            });
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full">
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(handleAddProduct)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                {...register("category")}
                                className="input input-bordered"
                            >
                                <option value="Smartphone">Smartphone</option>
                                <option value="Featurephone">
                                    Featurephone
                                </option>
                                <option value="Tab">Tab</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input
                                {...register("picture", {
                                    required: "picture is required",
                                })}
                                type="file"
                            />
                            {errors.img && (
                                <p className="text-red-500">
                                    {errors.img.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: "product name is required",
                                })}
                                type="text"
                                placeholder="product name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input
                                {...register("location", {
                                    required: "location is required",
                                })}
                                type="text"
                                placeholder="location"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input
                                {...register("resale_price", {
                                    required: "resale price is required",
                                })}
                                type="number"
                                placeholder="resale price"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Original Price
                                </span>
                            </label>
                            <input
                                {...register("original_price", {
                                    required: "original price is required",
                                })}
                                type="number"
                                placeholder="original price"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of use</span>
                            </label>
                            <input
                                {...register("usedYear", {
                                    required: "year of use is required",
                                })}
                                type="text"
                                placeholder="year of use"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
