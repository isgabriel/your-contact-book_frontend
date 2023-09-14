/* eslint-disable @typescript-eslint/no-explicit-any */
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
                                className="error-msg"
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
                                className="error-msg"
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
                                className="error-msg"
                                message={errors.password.message}
                            />
                        )}
                    </FormSectionField>

                    {/* <FormSectionField>
                        <LabelField placeholder="Confirmar senha" />

                        <InputField
                            
                            type="password"
                            errors={errors.confirmPassword?.message}
                            register={register("confirmPassword")}
                            placeholder="Repita a senha..."
                        />

                        {errors.confirmPassword && (
                            <ErrorMessage
                                className="error-msg"
                                message={errors.confirmPassword.message}
                            />
                        )}
                    </FormSectionField> */}

                    <FormSectionField>
                        <LabelField placeholder="Telefone" />

                        <InputField
                            // onChange={handlePhoneNumberChange}
                            // value={phoneNumber}
                            errors={errors.telephone?.message}
                            register={register("telephone")}
                            placeholder="Digite seu telefone..."
                        />

                        {errors.telephone && (
                            <ErrorMessage
                                className="error-msg"
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
