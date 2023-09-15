import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const token = localStorage.getItem("@ContactBook: TOKEN");
    return token ? <Outlet /> : <Navigate to="/" />;
};

export { ProtectedRoutes };
