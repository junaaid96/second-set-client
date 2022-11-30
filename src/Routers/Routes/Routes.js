import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Admin/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Admin/ReportedItems/ReportedItems";
import Blog from "../../Pages/Blog/Blog";
import MyOrders from "../../Pages/Buyer/MyOrders/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import AddProduct from "../../Pages/Seller/AddProduct/AddProduct";
import MyBuyers from "../../Pages/Seller/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/Seller/MyProducts/MyProducts";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import BuyerRoutes from "../BuyerRoutes/BuyerRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/allSellers",
                element: (
                    <AdminRoute>
                        <AllSellers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/allBuyers",
                element: (
                    <AdminRoute>
                        <AllBuyers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/reportedItems",
                element: (
                    <AdminRoute>
                        <ReportedItems />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/myOrders",
                element: (
                    <BuyerRoutes>
                        <MyOrders />
                    </BuyerRoutes>
                ),
            },
            {
                path: "/dashboard/myProducts",
                element: (
                    <SellerRoutes>
                        <MyProducts />
                    </SellerRoutes>
                ),
            },
            {
                path: "/dashboard/addProduct",
                element: (
                    <SellerRoutes>
                        <AddProduct />
                    </SellerRoutes>
                ),
            },
            {
                path: "/dashboard/myBuyers",
                element: (
                    <SellerRoutes>
                        <MyBuyers />
                    </SellerRoutes>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
