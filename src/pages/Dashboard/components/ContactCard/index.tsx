/* eslint-disable @typescript-eslint/no-unused-vars */
import copyImg from "../../../../assets/copy-button.svg";

import { UserIcon } from "../../../../components/UserIcon";
import { tContact } from "../../../../interfaces/contact.interfaces";

import { useState, useEffect, useRef, useContext } from "react";
import { ContactContext } from "../../../../context/ContactContext";

import "./style.scss";

const copyToClipboard = (content: string) => {
    const textField = document.createElement("textarea");
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
};

interface iContactCardProps {
    contact: tContact;
}

export const ContactCard = ({ contact }: iContactCardProps) => {
    const [_, setDisplayPopupMenu] = useState<boolean>(false);
    const [deleteCounter, setDeleteCounter] = useState<number>(1);

    const { deleteContact, setEditContactModal, setEditContactId } =
        useContext(ContactContext);

    const popupMenuRef = useRef<HTMLDivElement>(null);

    const handleCopyEmail = () => {
        copyToClipboard(contact.email);
    };

    const handleCopyPhone = () => {
        copyToClipboard(contact.phone);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupMenuRef.current &&
                !popupMenuRef.current.contains(event.target as Node)
            ) {
                setDisplayPopupMenu(false);
                setDeleteCounter(1);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const editContactEnableModal = () => {
        setDisplayPopupMenu(false);
        setTimeout(() => {
            setEditContactModal(true);
        }, 100);
        setEditContactId(contact.id);
    };

    const handleDeleteContact = () => {
        if (deleteCounter == 1) {
            setDeleteCounter(deleteCounter + 1);
        } else {
            deleteContact(contact.id);
        }
    };

    return (
        <li className="contact-card">
            <section>
                <div className="icon-div contact-icon-div">
                    <UserIcon initialLetter={contact.name[0]} />
                    <h3 className="mb-2">{contact.name}</h3>
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
                    <span>{contact.phone}</span>
                </div>
            </div>
            <div className="div-contacts-buttons" ref={popupMenuRef}>
                <button
                    onClick={editContactEnableModal}
                    className="edit-contact"
                >
                    Editar contato
                </button>
                <button
                    onClick={handleDeleteContact}
                    className={
                        deleteCounter == 2
                            ? "confirm-delete-contact"
                            : "delete-contact"
                    }
                >
                    {deleteCounter === 2
                        ? "Confirmar e excluir"
                        : "Excluir contato"}
                </button>
            </div>
        </li>
    );
};
