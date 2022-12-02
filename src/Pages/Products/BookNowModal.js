import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookNowModal = ({ product }) => {
    const { _id, name: item_name, resale_price, isBooked } = product;
    const { user } = useContext(AuthContext);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item_name = form.item_name.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingInfo = {
            buyer_name: name,
            email,
            item_name,
            price,
            phone,
            meeting_location: location,
        };

        fetch(`https://second-set-server.vercel.app/product/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ isBooked: true }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        fetch("https://second-set-server.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking Successful");
                    refreshPage();
                } else {
                    toast.error(data.message);
                }
            });
    };

    return (
        <>
            {isBooked ? (
                <button disabled className="btn">
                    Booked
                </button>
            ) : (
                <label
                    htmlFor={`book-now-modal-${_id}`}
                    className={`btn btn-primary`}
                >
                    Book Now
                </label>
            )}

            <input
                type="checkbox"
                id={`book-now-modal-${_id}`}
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor={`book-now-modal-${_id}`}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <form onSubmit={handleBook}>
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
                                <span className="label-text">Item Name</span>
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
                                htmlFor={`book-now-modal-${_id}`}
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
