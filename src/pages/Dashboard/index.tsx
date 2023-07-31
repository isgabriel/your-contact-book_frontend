import { Header } from "./components/Header";
import { StyledContainer } from "../../styles/Container";
import { AddContact } from "./components/AddContact";

import { StyledContactList } from "./styled";
import { ContactCard } from "./components/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import { EditContactModal } from "./components/EditContactModal";
import { EditUserModal } from "./components/EditUserModal";

const ContactsPage = () => {
    const { contacts } = useContext(ContactContext);

    return (
        <>
            <EditContactModal />
            <EditUserModal />
            <Header />
            <main>
                <StyledContainer>
                    <AddContact />
                    <StyledContactList>
                        {contacts.map((contact) => {
                            return (
                                <ContactCard
                                    contact={contact}
                                    key={contact.id}
                                />
                            );
                        })}
                    </StyledContactList>
                </StyledContainer>
            </main>
        </>
    );
};

export { ContactsPage };
