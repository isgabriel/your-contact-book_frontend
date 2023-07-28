import { ReactNode } from "react";
import { TContact } from "../../interfaces/contacts.interfaces";

interface iContactContextProps {
    contacts: TContact[];
    setContacts: React.Dispatch<React.SetStateAction<TContact[]>>;
}

interface iContactProviderProps {
    children: ReactNode;
}

export type { iContactContextProps, iContactProviderProps };
