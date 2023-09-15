import { useContext } from "react";
import { useModal } from "../../../hooks/modalHook";
import { Button } from "../../Button";
import { ContactContext } from "../../../context/ContactContext";

import FormStyled from "../forms.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";

const DeleteContactForm = () => {
    const { setShowModal } = useModal();
    const { deleteContact, selectedContactId } = useContext(ContactContext);

    const idContact: number = selectedContactId!;

    const handleCancel = () => {
        setShowModal("");
    };

    const handleDelete = () => {
        deleteContact(idContact);
    };
    return (
        <div>
            <h3 className={FormStyled.subtitle}>
                Tem certeza que deseja excluir esse contato?
            </h3>

            <div className={FormStyled.buttonsInRow}>
                <Button
                    className={ButtonStyled.greyButton}
                    text="Cancelar"
                    onClick={handleCancel}
                    type="button"
                />
                <Button
                    className={ButtonStyled.redButton}
                    text="Excluir"
                    onClick={handleDelete}
                    type="button"
                />
            </div>
        </div>
    );
};

export { DeleteContactForm };
