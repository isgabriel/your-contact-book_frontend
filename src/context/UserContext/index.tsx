/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { iUserContext } from "./types";
import { api } from "../../services/api";
import { iLogin, iUser } from "../../interfaces/user.interfaces";
import { useNavigate } from "react-router-dom";
import { iChildrenProp } from "../../interfaces/children.interfaces";

import { ToastContainer, toast } from "react-toastify";
import { MenuContext } from "../MenuContext";
import { useModal } from "../../hooks/modalHook";

const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iChildrenProp) => {
    const [user, setUser] = useState<iUser | null>(null);
    const [loggedUser, setLoggedUser] = useState<iUser | null>(null);

    const { menu, setMenu } = useContext(MenuContext);
    const { setShowModal } = useModal();

    const navigate = useNavigate();

    const token = localStorage.getItem("@ContactBook: TOKEN");

    useEffect(() => {
        const loadUser = async () => {
            if (token) {
                try {
                    api.defaults.headers.common.authorization = `Bearer ${token}`;
                    const response = await api.get("/users");
                    localStorage.getItem("@ContactBook: SERIALUSER");

                    setLoggedUser(response.data);
                    setUser(response.data.id);
                } catch (err) {
                    toast.error("Erro. Por favor verifique suas informações.");
                }
            } else {
                navigate("/");
            }
        };
        loadUser();
    }, []);

    const signUp = async (data: iUser) => {
        try {
            const response = await api.post("/users", data);
            setUser(response.data);

            toast.success(
                `Cadastro realizado com sucesso, ${response.data.fullname}!`
            );

            navigate("/");
        } catch (err) {
            console.log(err);

            toast.error(
                "Usuário já cadastrado. Por favor, confira suas informações!"
            );
        }
    };

    const login = async (data: iLogin) => {
        try {
            const response = await api.post("/login", data);

            const { token } = response.data;

            setUser(response.data);
            setLoggedUser(response.data);
            localStorage.setItem("@ContactBook: TOKEN", token);

            api.defaults.headers.common.authorization = `Bearer ${token}`;

            navigate("/dashboard");

            await retrieveUser();

            toast.success(`Bem vindo de volta!`);
        } catch (err) {
            console.log(err);

            toast.error(
                "Por favor, verifique suas informações e tente novamente!"
            );
        }
    };

    const retrieveUser = async () => {
        try {
            const response = await api.get("/users");

            api.defaults.headers.common.authorization = `Bearer ${token}`;

            localStorage.setItem("@ContactBook: SERIALUSER", response.data.id);

            setUser(response.data.id);
        } catch (err) {
            console.log(err);

            toast.error("Usuário não cadastrado!");
        }
    };

    const patchUser = async (data: iUser) => {
        const id = localStorage.getItem("@ContactBook: SERIALUSER");

        try {
            const response = await api.patch(`/users/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data);
            setShowModal("");

            toast.success("Perfil atualizado!");
        } catch (err) {
            console.log(err);

            toast.error(
                "Não foi possível atualizar o perfil. Verifique as informações e tente novamente!"
            );
        }
    };

    const deleteUser = async () => {
        try {
            const id = localStorage.getItem("@ContactBook: SERIALUSER");
            await api.delete(`users/${id}`);

            setUser(null);
            setShowModal("");

            localStorage.removeItem("@ContactBook: TOKEN");
            localStorage.removeItem("@ContactBook: SERIALUSER");

            navigate("/");

            toast.success("Usuário deletado com sucesso!");
        } catch (err) {
            console.log(err);

            toast.error(
                "Não foi possível realizar a operação. Verifique suas informações e tente novamente!"
            );
        }
    };

    const logout = () => {
        setUser(null);
        setLoggedUser(null);
        setMenu(!menu);

        localStorage.removeItem("@ContactBook: TOKEN");
        localStorage.removeItem("@ContactBook: SERIALUSER");

        navigate("/");

        toast.success("Logout feito com sucesso!");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                loggedUser,
                setLoggedUser,
                signUp,
                login,
                logout,
                patchUser,
                deleteUser,
            }}
        >
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
