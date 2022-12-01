import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookNowModal = ({ product }) => {
    const { _id, name: item_name, resale_price } = product;
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingInfo = {
            buyer_name: name,
            email,
            item_name,
            price: resale_price,
            phone,
            meeting_location: location,
        };

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking Successful");
                } else {
                    toast.error(data.message);
                }
            });

            fetch(`http://localhost:5000/product/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-Type": "application/json",

                },
                body: JSON.stringify({isSold: true})

            })
    };

    return (
        <>
            <input
                type="checkbox"
                id="book-now-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="book-now-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                defaultValue={user?.displayName}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item</span>
                            </label>
                            <input
                                name="item_name"
                                type="text"
                                placeholder="item-name"
                                defaultValue={item_name}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                name="price"
                                type="number"
                                placeholder="price"
                                defaultValue={resale_price}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                name="phone"
                                type="number"
                                placeholder="phone"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Meeting Location
                                </span>
                            </label>
                            <input
                                name="location"
                                type="text"
                                placeholder="meeting location"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="modal-action">
                            <input
                                type="submit"
                                htmlFor="book-now-modal"
                                className="btn"
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;
