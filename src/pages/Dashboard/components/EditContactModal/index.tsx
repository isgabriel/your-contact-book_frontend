import { Modal } from "../../../../components/Modal";

import { useContext } from "react";
import { ContactContext } from "../../../../context/ContactContext";
import { EditContactForm } from "../../../../components/Forms/EditContactForm";

export const EditContactModal = () => {
    const { editContactModal } = useContext(ContactContext);

    if (!editContactModal) {
        return <></>;
    }
    return (
        <Modal title="Editar contato">
            <EditContactForm />
        </Modal>
    );
};
