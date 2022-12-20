import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";
import MyProduct from "./MyProduct";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const {
        data: products = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://second-set-server.vercel.app/products/${user.email}`
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
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Product Name</th>
                        <th>Resale Price</th>
                        <th>Status</th>
                        <th>Advertisement</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {products.map((myProduct, index) => (
                    <MyProduct
                        key={myProduct._id}
                        myProduct={myProduct}
                        index={index}
                        refetch={refetch}
                    ></MyProduct>
                ))}
            </table>
        </div>
    );
};

export default MyProducts;
