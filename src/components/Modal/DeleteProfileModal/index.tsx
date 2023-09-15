import { DeleteProfileForm } from "../../Forms/DeleteProfileForm";
import { Modal } from "../index";

const DeleteProfileModal = () => {
    return (
        <Modal title="Deletar Perfil">
            <DeleteProfileForm />
        </Modal>
    );
};

export { DeleteProfileModal };
