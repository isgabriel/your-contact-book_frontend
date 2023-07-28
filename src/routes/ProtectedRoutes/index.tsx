import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const token: string | null = localStorage.getItem(
        "@Your Contact Book: token"
    );
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoutes };
