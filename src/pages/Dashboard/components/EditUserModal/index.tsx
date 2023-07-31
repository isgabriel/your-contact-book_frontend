/* eslint-disable @typescript-eslint/no-explicit-any */

import { Modal } from "../../../../components/Modal";

import { useContext } from "react";

import { UserContext } from "../../../../context/UserContext";
import { EdituserForm } from "../../../../components/Forms/EdituserForm";

export const EditUserModal = () => {
    const { editUserModal } = useContext(UserContext);

    if (!editUserModal) {
        return <></>;
    }
    return (
        <Modal title="Editar perfil">
            <EdituserForm />
        </Modal>
    );
};
