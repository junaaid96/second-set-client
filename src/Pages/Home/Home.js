import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import MockUpScreen from "./MockUpScrren/MockUpScreen";
import Stat from "./Stat/Stat";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <Advertisement />
            <div className="flex flex-wrap items-center justify-evenly">
                <MockUpScreen />
                <Stat />
            </div>
        </>
    );
};

export default Home;
