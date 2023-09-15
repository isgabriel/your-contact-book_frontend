import { ContactCard } from "../../components/ContactCard";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import { UserContext } from "../../context/UserContext";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Header/Navbar";
import { MenuHamburguer } from "../../components/Header/MenuHamburguer";
import { Menu } from "../../components/Menu";
import { MenuContext } from "../../context/MenuContext";
import { UserIcon } from "../../components/UserIcon";
import { ModalContext } from "../../context/ModalContext";
import { AddContactModal } from "../../components/Modal/AddContactModal";
import { EditContactModal } from "../../components/Modal/EditContactModal";
import { DeleteContactModal } from "../../components/Modal/DeleteContactModal";
import { EditProfileModal } from "../../components/Modal/EdtProfileModal";
import { DeleteProfileModal } from "../../components/Modal/DeleteProfileModal";
import { iContact } from "../../interfaces/contact.interfaces";

import styles from "./styles.module.scss";
import { AddContactSection } from "../../components/AddContactSection";
import { NoticeAboutApi } from "../../components/NoticeAboutApi";

const Dashboard = () => {
    const { menu } = useContext(MenuContext);
    const { showModal } = useContext(ModalContext);
    const { contact } = useContext(ContactContext);
    const { loggedUser } = useContext(UserContext);

    return (
        <>
            <NoticeAboutApi />
            {loggedUser ? (
                <>
                    {menu && <Menu />}
                    {showModal === "addContact" ? <AddContactModal /> : null}
                    {showModal === "editContact" ? <EditContactModal /> : null}
                    {showModal === "deleteContact" ? (
                        <DeleteContactModal />
                    ) : null}
                    {showModal === "editProfile" ? <EditProfileModal /> : null}
                    {showModal === "deleteProfile" ? (
                        <DeleteProfileModal />
                    ) : null}
                    <span className={styles.bgDash}></span>
                    <Header>
                        <MenuHamburguer />
                        <div>
                            {loggedUser.fullname ? (
                                <UserIcon
                                    initialLetter={loggedUser.fullname[0]}
                                />
                            ) : (
                                <UserIcon initialLetter="C" />
                            )}

                            <Navbar />
                        </div>
                    </Header>
                    <main className={styles.mainDashContainer}>
                        <AddContactSection />
                        <div>
                            {contact && contact.length > 0 ? (
                                <ul className={styles.contactsList}>
                                    {contact?.map((contact: iContact) => {
                                        return (
                                            <ContactCard
                                                contact={contact}
                                                key={contact.id}
                                            />
                                        );
                                    })}
                                </ul>
                            ) : (
                                <h3 className={styles.noContactsMessage}>
                                    Você ainda não possui contatos cadastrados.
                                    Tente cadastrar um novo contato clicando no
                                    botão de adicionar!
                                </h3>
                            )}
                        </div>
                    </main>
                </>
            ) : (
                <div>
                    <p>...</p>
                </div>
            )}
        </>
    );
};

export { Dashboard };
