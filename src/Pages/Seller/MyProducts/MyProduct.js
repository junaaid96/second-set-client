import React from 'react';

const MyProduct = ({myProduct, index}) => {
    const {seller_name, seller_email, name: productName, resale_price, isBooked: status} = myProduct;

    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{seller_name}</td>
                <td>{seller_email}</td>
                <td>{productName}</td>
                <td>{resale_price}</td>
                <td>{status ? "Booked" : "Available"}</td>
                <td><button className="btn btn-sm btn-primary">Advertise</button></td>
                <td><button className="btn btn-sm btn-error">X</button></td>
            </tr>
        </tbody>
    );
};

export default MyProduct;