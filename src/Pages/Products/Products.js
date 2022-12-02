
import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const productsData = useLoaderData();
    // const { refetch } = useQuery("products", () =>
    //     fetch("https://second-set-server.vercel.app/products").then((res) =>
    //         res.json()
    //     )
    // );
    return (
        <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
            {productsData.map((product) => (
                <Product
                    key={product._id}
                    product={product}
                ></Product>
            ))}
        </div>
    );
};

export default Products;
