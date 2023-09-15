import { EditContactForm } from "../../Forms/EditContactForm";
import { Modal } from "../index";

const EditContactModal = () => {
    return (
        <Modal title="Editar Contato">
            <EditContactForm />
        </Modal>
    );
};

export { EditContactModal };
