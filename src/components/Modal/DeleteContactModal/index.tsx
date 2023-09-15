import { DeleteContactForm } from "../../Forms/DeleteContactForm";
import { Modal } from "../index";

const DeleteContactModal = () => {
    return (
        <Modal title="Deletar Contato">
            <DeleteContactForm />
        </Modal>
    );
};

export { DeleteContactModal };
