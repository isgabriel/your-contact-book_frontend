interface iContact {
    id: number;
    fullname: string;
    telephone: string;
    email: string;
}

interface iDefaultId {
    id: number;
}

interface iContactsList {
    contacts: iContact;
}

export type { iContact, iDefaultId, iContactsList };
