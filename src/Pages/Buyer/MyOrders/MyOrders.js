import { useQuery } from "@tanstack/react-query";
import React from "react";
import Order from "./Order";

const MyOrders = () => {
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/bookings");
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Meeting Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {bookings.map((booking, index) => (
                    <Order
                        key={booking._id}
                        order={booking}
                        index={index}
                    ></Order>
                ))}
            </table>
        </div>
    );
};

export default MyOrders;
