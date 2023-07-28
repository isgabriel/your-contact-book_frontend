import { createContext, useEffect, useState } from "react";
import { iLoginResponse, iUserContextValues } from "./interfaces";
import { iUserProviderProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { TUserLogin } from "../../interfaces/users.interfaces";

const UserContext = createContext({} as iUserContextValues);

const UserProvider = ({ children }: iUserProviderProps) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@Your Contact Book: token");

        if (!token) {
            setLoading(false);
            return;
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setLoading(false);
    }, []);

    const login = async (data: TUserLogin) => {
        try {
            const response = await api.post<iLoginResponse>(
                "/users/login",
                data
            );

            const { token } = response.data;

            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem("@Your Contact Book: token", token);
            setLoading(false);

            navigate("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <UserContext.Provider value={{ login, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
