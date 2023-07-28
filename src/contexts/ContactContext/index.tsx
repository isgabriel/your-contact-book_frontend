import { createContext, useState } from "react";
import { iContactContextProps, iContactProviderProps } from "./interfaces";
import { TContact } from "../../interfaces/contacts.interfaces";

const ContactContext = createContext({} as iContactContextProps);

const ContactProvider = ({ children }: iContactProviderProps) => {
    const [contacts, setContacts] = useState<TContact[]>([]);

    return (
        <ContactContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactContext.Provider>
    );
};

export { ContactContext, ContactProvider };
