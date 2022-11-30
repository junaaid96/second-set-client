import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Admin/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Admin/ReportedItems/ReportedItems";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                <DashboardLayout></DashboardLayout>
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <AdminRoute>
                        <AllSellers></AllSellers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/allBuyers",
                element: (
                    <AdminRoute>
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/reportedItems",
                element: (
                    <AdminRoute>
                        <ReportedItems></ReportedItems>
                    </AdminRoute>
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
