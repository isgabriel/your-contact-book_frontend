import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { Tests } from "../pages/Tests";
import { Home } from "../pages/Home";
import { PublicRoutes } from "./PublicRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="/" element={<PublicRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/tests" element={<Tests />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            {/* <Route path="/dashboard" element={<ContactsPage />} /> */}

            {/* <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<ContactsPage />} />
            </Route> */}
        </Routes>
    );
};

export { AppRoutes };
