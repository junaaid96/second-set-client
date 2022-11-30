import React from "react";

const Seller = ({ seller, index, refetch }) => {
    const { _id, name, role } = seller;

    const handleDelete = () => {
        fetch(`https://second-set-server.vercel.app/users/${_id}`, {
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

    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{role}</td>
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

export default Seller;
