/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { iAuthContextProps, iAuthProviderProps } from "./interfaces";

import { api } from "../../services/api";

import { useContext } from "react";
import { ContactContext } from "../ContactContext";
import { useState } from "react";

import { useEffect } from "react";
import { tUser } from "../../interfaces/user.interfaces";
import { tUserLogin } from "../../interfaces/user.interfaces";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

import jwtDecode from "jwt-decode";

const AuthContext = createContext({} as iAuthContextProps);

const AuthProvider = ({ children }: iAuthProviderProps) => {
    const [user, setUser] = useState<tUser | null>(null);

    const { setContacts } = useContext(ContactContext);
    const {
        setUpdtedUser,
        setIsLoading,
        setStatus,
        setErrorMessage,
        disableStatus,
    } = useContext(UserContext);

    const userId = localStorage.getItem("@contact-book: userId");
    const token = localStorage.getItem("@contact-book: accessToken");

    const navigate = useNavigate();

    const getLoggedUser = async (userId: number, token: string | null) => {
        try {
            const request = await api.get(`/users/dashboard/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(request.data);
            setUpdtedUser(request.data);
            setContacts(request.data.contacts);

            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            navigate("/");
        }
    };

    const login = async (data: tUserLogin) => {
        setIsLoading(true);
        try {
            const request = await api.post("/users/login", data);
            setIsLoading(false);
            setStatus("success");

            const decodedJwt: any = jwtDecode(request.data.token);

            localStorage.setItem(
                "@contact-book: accessToken",
                request.data.token
            );
            localStorage.setItem("@contact-book: userId", decodedJwt.sub);

            await getLoggedUser(Number(decodedJwt.sub), request.data.token);

            navigate("/dashboard");
        } catch (err: unknown) {
            console.log(err);
            setStatus("error");
            setErrorMessage("Email ou senha inválidos");
        } finally {
            disableStatus();
        }
    };

    useEffect(() => {
        if (Number(userId) != 0) {
            getLoggedUser(Number(userId), token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
