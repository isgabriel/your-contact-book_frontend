import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ContactsPage } from "../pages/Dashboard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<ContactsPage />} />
            </Route>
        </Routes>
    );
};

export { AppRoutes };
