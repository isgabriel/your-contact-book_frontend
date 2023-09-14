/* eslint-disable @typescript-eslint/no-unused-vars */
import copyImg from "../../assets/copy-button.svg";

import { UserIcon } from "../UserIcon";

import { iContact } from "../../interfaces/contact.interfaces";
import { useModal } from "../../hooks/modalHook";

import "./style.scss";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

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
    const { selectedContactId, setSelectedContactId } =
        useContext(ContactContext);
    const { setShowModal } = useModal();

    const handleCopyEmail = () => {
        copyToClipboard(contact.email);
    };

    const handleCopyPhone = () => {
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
        <li className="contact-card">
            <section>
                <div className="icon-div contact-icon-div">
                    <UserIcon initialLetter={contact.fullname[0]} />
                    <h3 className="mb-2">{contact.fullname}</h3>
                </div>
            </section>
            <div className="contact-info mb-3">
                <div>
                    <button onClick={handleCopyEmail} className="button-copy">
                        <img src={copyImg} className="copy-img" />
                    </button>
                    <span>{contact.email}</span>
                </div>
                <div>
                    <button onClick={handleCopyPhone} className="button-copy">
                        <img src={copyImg} className="copy-img" />
                    </button>
                    <span>{contact.telephone}</span>
                </div>
            </div>
            <div className="div-contacts-buttons">
                <button onClick={handleEditContact}>Editar Contato</button>
                <button onClick={handleDeleteContact}>Excluir Contato</button>
            </div>
        </li>
    );
};
