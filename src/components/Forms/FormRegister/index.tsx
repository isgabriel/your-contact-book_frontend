/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../../../components/Forms/InputField";

import { useForm } from "react-hook-form";
import { userReqSchema } from "../../../schemas/user.schema";

import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { ContactContext } from "../../../context/ContactContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { LabelField } from "../LabelField";
import { FormSectionField } from "../FormSectionField";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";
import { Button } from "../../Button";

import ButtonStyled from "../../Button/styles.module.scss";
import "../forms.scss";

const FormRegister = () => {
    const { phoneNumber, setPhoneNumber, handlePhoneNumberChange } =
        useContext(ContactContext);
    const { registerUser } = useContext(UserContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userReqSchema),
        mode: "all",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
        },
    });

    const onSubmit = (data: any) => {
        registerUser(data);
        setPhoneNumber("");
    };

    const goToLogin = () => {
        navigate("/login");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formGroup">
            <div className="form-div">
                <h3 className="subtitle">
                    Não perca tempo e <span>junte-se a comunidade </span>
                    Contact Book!
                </h3>
                <div className="formInputsDiv">
                    <FormSectionField>
                        <LabelField placeholder="Nome" />
                        <InputField
                            required={true}
                            errors={errors.name?.message}
                            register={register("name")}
                            placeholder="Digite seu nome..."
                        />
                        {errors.name && (
                            <ErrorMessage
                                className="error-msg"
                                message={errors.name.message}
                            />
                        )}
                    </FormSectionField>

                    <FormSectionField>
                        <LabelField placeholder="Email" />
                        <InputField
                            required={true}
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
                            required={true}
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

                    <FormSectionField>
                        <LabelField placeholder="Confirmar senha" />

                        <InputField
                            required={true}
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
                    </FormSectionField>

                    <FormSectionField>
                        <LabelField placeholder="Telefone" />

                        <InputField
                            required={true}
                            maxLength={16}
                            onChange={handlePhoneNumberChange}
                            value={phoneNumber}
                            errors={errors.phone?.message}
                            register={register("phone")}
                            placeholder="Digite seu telefone..."
                        />

                        {errors.phone && (
                            <ErrorMessage
                                className="error-msg"
                                message={errors.phone.message}
                            />
                        )}
                    </FormSectionField>
                </div>

                <div className="form-btns">
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
