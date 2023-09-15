import { InputField } from "../InputField";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/UserContext";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { iUserUpdate } from "../../../interfaces/user.interfaces";
import { Button } from "../../Button";

import FormStyled from "../forms.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateSchema } from "../../../schemas/user.schema";

const EditProfileForm = () => {
    const { patchUser, setPersonalInfo, loggedUser } = useContext(UserContext);

    const { handleSubmit, register } = useForm<iUserUpdate>({
        resolver: zodResolver(userUpdateSchema),
    });

    const onSubmit = (data: iUserUpdate) => {
        const newData = {
            fullname:
                data.fullname == "" ? loggedUser!.fullname : data.fullname,
            email: data.email == "" ? loggedUser!.email : data.email,
            telephone:
                data.telephone == "" ? loggedUser!.telephone : data.telephone,
        };

        setPersonalInfo(newData);

        patchUser(newData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={FormStyled.formModal}
        >
            <FormSectionField>
                <LabelField placeholder="Nome" />
                <InputField
                    type="text"
                    register={register("fullname")}
                    defaultValue={loggedUser?.fullname}
                />
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Email" />
                <InputField
                    type="text"
                    register={register("email")}
                    defaultValue={loggedUser?.email}
                />
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Telefone" />

                <InputField
                    type="text"
                    register={register("telephone")}
                    defaultValue={loggedUser?.telephone}
                />
            </FormSectionField>

            <div className={FormStyled.formBtns}>
                <Button
                    className={ButtonStyled.secondaryButton}
                    type="submit"
                    text="Atualizar perfil"
                />
            </div>
        </form>
    );
};

export { EditProfileForm };
