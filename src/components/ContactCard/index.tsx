import { UserIcon } from "../UserIcon";

import { iContact } from "../../interfaces/contact.interfaces";
import { useModal } from "../../hooks/modalHook";

import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import copyBtn from "../../assets/copy-button.svg";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";

const copyToClipboard = (content: string) => {
    const textField = document.createElement("textarea");
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
};

interface iContactCardProps {
    contact: iContact;
}

export const ContactCard = ({ contact }: iContactCardProps) => {
    const { setSelectedContactId } = useContext(ContactContext);
    const { setShowModal } = useModal();

    const handleCopyEmail = () => {
        toast.success("Email Copiado!");
        copyToClipboard(contact.email);
    };

    const handleCopyPhone = () => {
        toast.success("Telefone Copiado!");
        copyToClipboard(contact.telephone);
    };

    const handleEditContact = () => {
        setSelectedContactId(contact.id);
        setShowModal("editContact");
    };

    const handleDeleteContact = () => {
        setSelectedContactId(contact.id);
        setShowModal("deleteContact");
    };

    return (
        <li className={styles.contactCard}>
            <div className={styles.contactIconDiv}>
                <UserIcon initialLetter={contact.fullname[0]} />
                <h3>{contact.fullname}</h3>
            </div>

            <div className={styles.contactInfo}>
                <div
                    className={styles.contactSpecificInfo}
                    onClick={handleCopyEmail}
                >
                    <button className={styles.buttonCopy}>
                        <img src={copyBtn} className={styles.copyImg} />
                    </button>
                    <span>{contact.email}</span>
                </div>
                <div
                    className={styles.contactSpecificInfo}
                    onClick={handleCopyPhone}
                >
                    <button className={styles.buttonCopy}>
                        <img src={copyBtn} className={styles.copyImg} />
                    </button>
                    <span>{contact.telephone}</span>
                </div>
            </div>
            <div className={styles.divContactsButtons}>
                <button onClick={handleEditContact}>Editar Contato</button>
                <button onClick={handleDeleteContact}>Excluir Contato</button>
            </div>
        </li>
    );
};
