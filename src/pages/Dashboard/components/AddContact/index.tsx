import { useState } from "react";
import { StyledAddContact } from "./styled";
import { StyledButton } from "../../../../styles/Button";

import { AddContactForm } from "../../../../components/Forms/AddContactForm";

export const AddContact = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <StyledAddContact>
            <header>
                <h1>Contatos</h1>
                <StyledButton
                    onClick={() => setIsOpen(!isOpen)}
                    className={isOpen ? "open" : ""}
                >
                    {isOpen ? "Cancelar" : "Adicionar"}
                </StyledButton>
            </header>
            {isOpen && (
                <>
                    <h3>Adicionar contato</h3>
                    <AddContactForm />
                </>
            )}
        </StyledAddContact>
    );
};
