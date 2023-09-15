import { useModal } from "../../../hooks/modalHook";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Button } from "../../Button";

import FormStyled from "../forms.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";

const DeleteProfileForm = () => {
    const { setShowModal } = useModal();
    const { deleteUser } = useContext(UserContext);

    const handleCancel = () => {
        setShowModal("");
    };

    const handleDelete = () => {
        deleteUser();
    };
    return (
        <div>
            <h3 className={FormStyled.subtitle}>
                Tem certeza que deseja excluir seu perfil?
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

export { DeleteProfileForm };
