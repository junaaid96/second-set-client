import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Order from "./Order";
import { AuthContext } from "../../../contexts/AuthProvider";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://second-set-server.vercel.app/bookings/${user.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <LoadingScreen />;
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
