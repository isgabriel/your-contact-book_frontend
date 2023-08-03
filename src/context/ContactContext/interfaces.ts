import React from "react";
import {
    tContactReq,
    tContactUpdate,
} from "../../interfaces/contact.interfaces";
import { tContact } from "../../interfaces/contact.interfaces";

interface iContactProviderProps {
    children: React.ReactNode;
}

interface iContactContextProps {
    phoneNumber: string;
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
    contacts: tContact[];
    setContacts: React.Dispatch<React.SetStateAction<tContact[]>>;
    handlePhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createContact: (data: tContactReq) => Promise<void>;
    deleteContact: (contactId: number) => Promise<void>;
    editContactModal: boolean;
    setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>;
    editContactId: number | null;
    setEditContactId: React.Dispatch<React.SetStateAction<number | null>>;
    updateContact: (data: tContactUpdate) => Promise<void>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { iContactProviderProps, iContactContextProps };
