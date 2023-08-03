import { createContext, useEffect } from "react";
import { iContactProviderProps } from "./interfaces";
import { iContactContextProps } from "./interfaces";

import { useState } from "react";
import { api } from "../../services/api";
import {
    tContact,
    tContactReq,
    tContactUpdate,
} from "../../interfaces/contact.interfaces";
import { useNavigate } from "react-router-dom";

const ContactContext = createContext({} as iContactContextProps);

const ContactProvider = ({ children }: iContactProviderProps) => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [contacts, setContacts] = useState<tContact[]>([]);

    const [editContactModal, setEditContactModal] = useState<boolean>(false);
    const [editContactId, setEditContactId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const token = localStorage.getItem("@contact-book: accessToken");
    const userId = localStorage.getItem("@contact-book: userId");

    const navigate = useNavigate();

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        let formattedNumber = e.target.value;

        formattedNumber = formattedNumber.replace(/\D/g, "");

        if (formattedNumber.length > 2) {
            formattedNumber = `+${formattedNumber.slice(
                0,
                2
            )} ${formattedNumber.slice(2)}`;
        }

        if (formattedNumber.length > 7) {
            formattedNumber = `${formattedNumber.slice(
                0,
                6
            )} ${formattedNumber.slice(6)}`;
        }

        setPhoneNumber(formattedNumber);
    };

    const getContacts = async () => {
        try {
            const request = await api.get<Promise<tContact[]>>(
                `/users/contacts/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setContacts(await request.data);
        } catch (err: unknown) {
            console.log(err);
        }
    };

    useEffect(() => {
        const loadContacts = async () => {
            if (!token) {
                localStorage.removeItem("@contact-book: accessToken");
                localStorage.removeItem("@contact-book: userId");
                navigate("/");
                return;
            }

            try {
                const response = await api.get(`/users/contacts/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setContacts(response.data);
            } catch (err) {
                console.log("ERRO!!", err);
            }
        };

        loadContacts();
    }, []);

    const createContact = async (data: tContactReq) => {
        try {
            await api.post("/contacts", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPhoneNumber("");
            getContacts();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteContact = async (contactId: number) => {
        try {
            await api.delete(`/contacts/${contactId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            getContacts();
        } catch (err) {
            console.log(err);
        }
    };

    const updateContact = async (data: tContactUpdate) => {
        try {
            await api.patch(`/contacts/${editContactId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setPhoneNumber("");
            getContacts();
            setEditContactId(null);
            setEditContactModal(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ContactContext.Provider
            value={{
                phoneNumber,
                setPhoneNumber,
                handlePhoneNumberChange,
                createContact,
                contacts,
                setContacts,
                deleteContact,
                editContactModal,
                setEditContactModal,
                editContactId,
                setEditContactId,
                updateContact,
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export { ContactContext, ContactProvider };
