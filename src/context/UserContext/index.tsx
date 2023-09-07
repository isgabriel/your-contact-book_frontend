/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import { iUserProviderProps } from "./interfaces";
import { iUserContextProps } from "./interfaces";
import { tUserReq, tUserUpdate } from "../../interfaces/user.interfaces";

import { api } from "../../services/api";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const UserContext = createContext({} as iUserContextProps);

const UserProvider = ({ children }: iUserProviderProps) => {
    const [status, setStatus] = useState<"none" | "success" | "error">("none");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [editUserModal, setEditUserModal] = useState<boolean>(false);
    const [_, setUpdtedUser] = useState<tUserUpdate | null>(null);

    const navigate = useNavigate();

    const token = localStorage.getItem("@contact-book: accessToken");
    const userId = localStorage.getItem("@contact-book: userId");

    const disableStatus = () => {
        setIsLoading(false);
        setTimeout(() => {
            setStatus("none");
        }, 3000);
    };

    const registerUser = async (data: tUserReq) => {
        setIsLoading(true);
        try {
            await api.post("/users/register", data);
            setIsLoading(false);
            setStatus("success");

            navigate("/login");
        } catch (err: any) {
            console.log(err);
            if (err.response.detail === "Email already exists") {
                setErrorMessage("Este email já está cadastrado");
            }
            setStatus("error");
        } finally {
            disableStatus();
        }
    };

    const deleteUser = async () => {
        try {
            await api.delete(`/users/${Number(userId)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/login");
            localStorage.removeItem("@contact-book: accessToken");
            localStorage.removeItem("@contact-book: userId");
        } catch (err: unknown) {
            console.log(err);
        }
    };

    const updateUser = async (data: tUserUpdate) => {
        try {
            const response = await api.patch(`/users/${Number(userId)}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUpdtedUser(response.data);
            setEditUserModal(!editUserModal);

            window.location.reload();
        } catch (err: unknown) {
            console.log(err);
        }
    };

    return (
        <UserContext.Provider
            value={{
                registerUser,
                isLoading,
                setIsLoading,
                status,
                setStatus,
                errorMessage,
                setErrorMessage,
                disableStatus,
                deleteUser,
                editUserModal,
                setEditUserModal,
                updateUser,
                setUpdtedUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
