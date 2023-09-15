import React from "react";
import { iContact } from "../../interfaces/contact.interfaces";

interface iContactContext {
    contact: iContact[] | [];
    setContact: React.Dispatch<React.SetStateAction<iContact[] | []>>;
    selectedContactId: number | null;
    setSelectedContactId: React.Dispatch<React.SetStateAction<number | null>>;
    createContact: (formData: iContact) => Promise<void>;
    deleteContact: (id: number) => Promise<void>;
    retrieveContacts: () => Promise<void>;
    patchContact: (data: iContact, id: number) => Promise<void>;
}

export type { iContactContext };
