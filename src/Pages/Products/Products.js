import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const productsData = useLoaderData();
    return (
        <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
            {
                productsData.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;