import { useQuery } from "@tanstack/react-query";
import React from "react";
import Seller from "./Seller";

const AllSellers = () => {
    const {
        data: users = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(
                `https://second-set-server.vercel.app/users`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading || users.length === 0) {
        return <progress className="progress w-56"></progress>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {users?.map(
                    (user, i) =>
                        user.role === "seller" && (
                            <Seller
                                key={user._id}
                                seller={user}
                                index={i}
                                refetch={refetch}
                            ></Seller>
                        )
                )}
            </table>
        </div>
    );
};

export default AllSellers;
