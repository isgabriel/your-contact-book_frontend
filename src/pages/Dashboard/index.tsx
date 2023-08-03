import { Header } from "./components/Header";
import { AddContact } from "./components/AddContact";

import { ContactCard } from "./components/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import { EditContactModal } from "./components/EditContactModal";
import { EditUserModal } from "./components/EditUserModal";
import "./style.scss";

const ContactsPage = () => {
    const { contacts } = useContext(ContactContext);

    return (
        <>
            <EditContactModal />
            <EditUserModal />
            <Header />
            <main className="w-100">
                <div>
                    <AddContact />
                    <ul className="p-3 contacts-list">
                        {contacts.map((contact) => {
                            return (
                                <ContactCard
                                    contact={contact}
                                    key={contact.id}
                                />
                            );
                        })}
                    </ul>
                </div>
            </main>
        </>
    );
};

export { ContactsPage };
