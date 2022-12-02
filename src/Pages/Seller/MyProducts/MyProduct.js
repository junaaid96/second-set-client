import React from "react";

const MyProduct = ({ myProduct, index, refetch }) => {
    const {
        _id,
        name: productName,
        resale_price,
        seller_name,
        isBooked: status,
        seller_email,
    } = myProduct;

    const handleDelete = () => {
        fetch(`https://second-set-server.vercel.app/product/${_id}`, {
            method: "DELETE",
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                }
            });
    };

    const handleAdvertisement = () => {
        fetch(`https://second-set-server.vercel.app/products/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({}),
        });
    };

    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{seller_name}</td>
                <td>{seller_email}</td>
                <td>{productName}</td>
                <td>{resale_price}</td>
                <td>{status ? "Booked" : "Available"}</td>
                <td>
                    <button
                        onClick={handleAdvertisement}
                        className="btn btn-sm btn-primary"
                    >
                        Advertise
                    </button>
                </td>
                <td>
                    <button
                        onClick={handleDelete}
                        className="btn btn-error btn-sm"
                    >
                        X
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default MyProduct;
