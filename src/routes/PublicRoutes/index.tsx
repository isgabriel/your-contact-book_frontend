import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    const token = localStorage.getItem("@ContactBook: TOKEN");
    return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export { PublicRoutes };
