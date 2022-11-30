import React from "react";

const Stat = () => {
    return (
        <div className="stats stats-vertical shadow">
            <div className="stat">
                <div className="stat-title">Total Sold</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Buyers</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Sellers</div>
                <div className="stat-value">120</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    );
};

export default Stat;
