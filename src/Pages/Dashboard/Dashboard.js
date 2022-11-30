import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/users/${user.email}`;

    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            return data;
        },
    });

    return (
        <div className="text-center">
            <h1>Welcome To Dashboard</h1>
            <h2>
                Your role is <strong>{users.role}</strong>
            </h2>
        </div>
    );
};

export default Dashboard;
