import React from "react";

const Order = ({ order, index }) => {
    const { buyer_name, email, item_name, price, phone, meeting_location } =
        order;
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{buyer_name}</td>
                <td>{email}</td>
                <td>{item_name}</td>
                <td>{price}</td>
                <td>{phone}</td>
                <td>{meeting_location}</td>
                <td><button className="btn btn-sm btn-primary">Pay</button></td>
            </tr>
        </tbody>
    );
};

export default Order;
