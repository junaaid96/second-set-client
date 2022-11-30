import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../customHooks/useAdmin";
import useBuyer from "../customHooks/useBuyer";
import useSeller from "../customHooks/useSeller";
import Navbar from "../Pages/Shared/Header/Navbar/Navbar";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-200 rounded">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        {isAdmin && (
                            <>
                                <li>
                                    <Link to="/dashboard/allSellers">
                                        All Sellers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/allBuyers">
                                        All Buyers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/reportedItems">
                                        Reported Items
                                    </Link>
                                </li>
                            </>
                        )}
                        {isBuyer && (
                            <>
                                <li>
                                    <Link to="/dashboard/myOrders">
                                        My Orders
                                    </Link>
                                </li>
                            </>
                        )}
                        {isSeller && (
                            <>
                                <li>
                                    <Link to="/dashboard/myProducts">
                                        My Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addProduct">
                                        Add A Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/myBuyers">
                                        My Buyers
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
