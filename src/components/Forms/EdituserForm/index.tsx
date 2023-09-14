/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../InputField";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/UserContext";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { iUser } from "../../../interfaces/user.interfaces";
import { Button } from "../../Button";

import FormStyled from "../forms.module.scss";

const EdituserForm = () => {
    const { patchUser } = useContext(UserContext);

    const { handleSubmit, register } = useForm<iUser>();

    const onSubmit = (data: iUser) => {
        patchUser(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={FormStyled.formModal}
        >
            <FormSectionField>
                <LabelField placeholder="Nome" />
                <InputField
                    required={false}
                    register={register("fullname")}
                    placeholder="nome"
                />
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Email" />
                <InputField register={register("email")} placeholder="email" />
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Telefone" />

                <InputField
                    type="text"
                    register={register("telephone")}
                    placeholder="telefone"
                />
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Senha" />

                <InputField
                    type="password"
                    register={register("password")}
                    placeholder="senha"
                />
            </FormSectionField>

            <div className={FormStyled.formBtns}>
                <Button
                    className="purple-btn button-common"
                    type="submit"
                    text="Atualizar informações"
                />
            </div>
        </form>
    );
};

export { EdituserForm };
