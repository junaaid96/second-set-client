import { useQuery } from "@tanstack/react-query";
import React from "react";
import Buyer from "./Buyer";

const AllBuyers = () => {
    const {
        data: users = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(
                "https://second-set-server.vercel.app/users"
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
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
                {users.map(
                    (user, i) =>
                        user.role === "buyer" && (
                            <Buyer
                                key={user._id}
                                buyer={user}
                                index={i}
                                refetch={refetch}
                            ></Buyer>
                        )
                )}
            </table>
        </div>
    );
};

export default AllBuyers;
