import { useContext } from "react";
import "./style.scss";

import { AddContactForm } from "../../../../components/Forms/AddContactForm";
import { ContactContext } from "../../../../context/ContactContext";

export const AddContact = () => {
    const { isOpen, setIsOpen } = useContext(ContactContext);

    return (
        <section className="p-3 section-add-contacts">
            <div className="contacts-div ">
                <h1 className=" subtitle contacts-title">Contatos</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                        isOpen ? "open add-contact-btn" : "add-contact-btn"
                    }
                >
                    {isOpen ? "x" : "+"}
                </button>
            </div>
            {isOpen && (
                <div className="div-add-contacts">
                    <h3 className="add-contacts-subtitle">Adicionar contato</h3>
                    <AddContactForm />
                </div>
            )}
        </section>
    );
};
