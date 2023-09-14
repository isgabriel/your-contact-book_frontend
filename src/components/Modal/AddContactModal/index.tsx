import { AddContactForm } from "../../Forms/AddContactForm";
import { Modal } from "../index";

const AddContactModal = () => {
    return (
        <Modal title="Adicionar Contato">
            <AddContactForm />
        </Modal>
    );
};

export { AddContactModal };
