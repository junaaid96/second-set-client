import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import MockUpScreen from "./MockUpScrren/MockUpScreen";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Advertisement />
            <MockUpScreen />
        </>
    );
};

export default Home;
