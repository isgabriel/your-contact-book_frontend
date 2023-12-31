import { InputField } from "../../../components/Forms/InputField";

import { useForm } from "react-hook-form";
import { userSchema } from "../../../schemas/user.schema";

import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { LabelField } from "../LabelField";
import { FormSectionField } from "../FormSectionField";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";
import { Button } from "../../Button";

import { iUser } from "../../../interfaces/user.interfaces";

import FormStyled from "../forms.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";

const FormRegister = () => {
    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iUser>({ resolver: zodResolver(userSchema) });

    const onSubmit = (data: iUser) => {
        signUp(data);
    };

    const goToLogin = () => {
        navigate("/login");
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={FormStyled.formGroup}
        >
            <div className={FormStyled.formDiv}>
                <h3 className={FormStyled.subtitle}>
                    Não perca tempo e <span>junte-se a comunidade </span>
                    Contact Book!
                </h3>
                <div className={FormStyled.formInputsDiv}>
                    <FormSectionField>
                        <LabelField placeholder="Nome" />
                        <InputField
                            errors={errors.fullname?.message}
                            register={register("fullname")}
                            placeholder="Digite seu nome..."
                        />
                        {errors.fullname && (
                            <ErrorMessage
                                className={FormStyled.errorMsg}
                                message={errors.fullname.message}
                            />
                        )}
                    </FormSectionField>

                    <FormSectionField>
                        <LabelField placeholder="Email" />
                        <InputField
                            errors={errors.email?.message}
                            register={register("email")}
                            placeholder="Digite seu email..."
                        />
                        {errors.email && (
                            <ErrorMessage
                                className={FormStyled.errorMsg}
                                message={errors.email.message}
                            />
                        )}
                    </FormSectionField>

                    <FormSectionField>
                        <LabelField placeholder="Senha" />

                        <InputField
                            type="password"
                            errors={errors.password?.message}
                            register={register("password")}
                            placeholder="Digite sua senha..."
                        />

                        {errors.password && (
                            <ErrorMessage
                                className={FormStyled.errorMsg}
                                message={errors.password.message}
                            />
                        )}
                    </FormSectionField>

                    <FormSectionField>
                        <LabelField placeholder="Telefone" />

                        <InputField
                            errors={errors.telephone?.message}
                            register={register("telephone")}
                            placeholder="Digite seu telefone..."
                        />

                        {errors.telephone && (
                            <ErrorMessage
                                className={FormStyled.errorMsg}
                                message={errors.telephone.message}
                            />
                        )}
                    </FormSectionField>
                </div>

                <div className={FormStyled.formBtns}>
                    <Button
                        className={ButtonStyled.primaryButton}
                        type="submit"
                        text="Cadastrar"
                    />

                    <Button
                        onClick={goToLogin}
                        className={ButtonStyled.secondaryButton}
                        type="button"
                        text="Ir para Login"
                    />
                </div>
            </div>
        </form>
    );
};

export { FormRegister };
