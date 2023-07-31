import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const token: string | null = localStorage.getItem(
        "@contact-book: accessToken"
    );
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export { ProtectedRoutes };
