import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedProduct from "./AdvertisedProduct";

const Advertisement = () => {
    const url = "https://second-set-server.vercel.app/advertised";

    const { data: products = [] } = useQuery({
        queryKey: ["products", { url }],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="my-10">
            {products.length !== 0 && (
                <>
                    <h1 className="text-3xl text-center">Advertisements</h1>
                    <p className="text-center mb-6">
                        Go to specific category for booking
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
                        {products.map((product) => (
                            <AdvertisedProduct
                                key={product._id}
                                advertisedProduct={product}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Advertisement;
