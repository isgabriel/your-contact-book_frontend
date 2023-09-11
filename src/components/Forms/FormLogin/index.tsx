/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { InputField } from "../InputField";

import { useForm } from "react-hook-form";
import { userLoginSchema } from "../../../schemas/user.schema";

import { AuthContext } from "../../../context/AuthContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";
import { Button } from "../../Button";

import ButtonStyled from "../../Button/styles.module.scss";
import "../forms.scss";

const FormLogin = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userLoginSchema),
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (data: any) => {
        login(data);
    };

    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formGroup">
            <div className="form-div">
                <h3 className="subtitle">
                    Peparado para <span>visualizar seus contatos</span> na
                    Contact Book?
                </h3>

                <div className="formInputsDiv">
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
                </div>

                <div className="form-btns">
                    <Button
                        className={ButtonStyled.primaryButton}
                        type="submit"
                        text="Entrar"
                    />

                    {/* <RedirectToOtherPage> */}
                    <Button
                        onClick={goToRegister}
                        className={ButtonStyled.secondaryButton}
                        type="button"
                        text="Ir para Cadastro"
                    />
                    {/* </RedirectToOtherPage> */}
                </div>
            </div>
        </form>
    );
};

export { FormLogin };
