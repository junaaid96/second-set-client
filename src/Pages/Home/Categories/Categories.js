import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const Categories = () => {
    const url = "https://second-set-server.vercel.app/categories";

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="mt-10">
            <h1 className="text-3xl mb-6 text-center">Phone Categories</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10">
                {categories.map((category) => (
                    <Category key={category._id} category={category}></Category>
                ))}
            </div>
        </div>
    );
};

export default Categories;
