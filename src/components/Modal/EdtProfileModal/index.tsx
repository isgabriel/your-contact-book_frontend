import { EditProfileForm } from "../../Forms/EditProfileForm";
import { Modal } from "../index";

const EditProfileModal = () => {
    return (
        <Modal title="Editar Perfil">
            <EditProfileForm />
        </Modal>
    );
};

export { EditProfileModal };
