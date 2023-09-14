/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";

import { useState } from "react";
import { api } from "../../services/api";

import { iContactContext } from "./types";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iChildrenProp } from "../../interfaces/children.interfaces";
import { iContact } from "../../interfaces/contact.interfaces";
import { useModal } from "../../hooks/modalHook";

const ContactContext = createContext({} as iContactContext);

const ContactProvider = ({ children }: iChildrenProp) => {
    const [contact, setContact] = useState<iContact[]>([]);

    const [selectedContactId, setSelectedContactId] = useState<number | null>(
        null
    );
    const { setShowModal } = useModal();

    const token = localStorage.getItem("@ContactBook: TOKEN");
    const navigate = useNavigate();

    useEffect(() => {
        const loadContacts = async () => {
            if (!token) {
                localStorage.removeItem("@ContactBook: TOKEN");
                localStorage.removeItem("@ContactBook: SERIALUSER");

                navigate("/");
            }

            try {
                const response = await api.get("/contacts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setContact(response.data);
            } catch (err) {
                console.log(
                    "Para carregar os contatos é necessário fazer login!"
                );
                // toast.error(
                //     "Erro. Por favor, verifique suas informções e tente novamente!"
                // );
            }
        };
        loadContacts();
    }, []);

    const createContact = async (formData: iContact) => {
        try {
            const { data } = await api.post("/contacts", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setContact(data.id);
            setShowModal("");

            toast.success("Novo contato adicionado!");

            await retrieveContacts();
        } catch (err) {
            console.log(err);

            toast.error(
                "Algo deu errado. Por favor, verifique as informções e tente novamente!"
            );
        }
    };

    const deleteContact = async (id: number) => {
        try {
            await api.delete(`contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = contact.filter((contacts) => contacts.id !== id);

            setContact(data);
            setShowModal("");

            await retrieveContacts();

            toast.success("Contato deletado com sucesso!");
        } catch (err) {
            console.log(err);

            toast.error(
                "Algo deu errado. Por favor, verifique as informções e tente novamente!"
            );
        }
    };

    const retrieveContacts = async () => {
        try {
            const response = await api.get("/contacts", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setContact(response.data);
        } catch (err) {
            console.log(err);

            toast.error(
                "Algo deu errado. Por favor, verifique as informções e tente novamente!"
            );
        }
    };

    const patchContact = async (data: iContact, id: number) => {
        try {
            const response = await api.patch(`/contacts/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setShowModal("");
            setContact((prevContacts) => {
                const updatedContacts = prevContacts.map((contact) =>
                    contact.id === id
                        ? { ...contact, ...response.data }
                        : contact
                );

                return updatedContacts;
            });

            toast.success("Contato atualizado com sucesso!");
        } catch (err) {
            console.log(err);

            toast.error(
                "Não foi possível atualizar o contato. Por favor, verifique as informações e tente novamente!"
            );
        }
    };

    return (
        <ContactContext.Provider
            value={{
                contact,
                setContact,
                selectedContactId,
                setSelectedContactId,
                createContact,
                deleteContact,
                retrieveContacts,
                patchContact,
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
        </ContactContext.Provider>
    );
};

export { ContactContext, ContactProvider };
