import React from "react";

const Order = ({ order, index }) => {
    const { buyer_name, email, item_name, price, phone, meeting_location } =
        order;
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <th>{buyer_name}</th>
                <th>{email}</th>
                <th>{item_name}</th>
                <th>{price}</th>
                <th>{phone}</th>
                <th>{meeting_location}</th>
                <th><button className="btn btn-sm btn-primary">Pay</button></th>
            </tr>
        </tbody>
    );
};

export default Order;
