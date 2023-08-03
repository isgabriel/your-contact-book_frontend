/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { InputField } from "../InputField";

import { useForm } from "react-hook-form";
import { userLoginSchema } from "../../../schemas/user.schema";

import { AuthContext } from "../../../context/AuthContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { RedirectToOtherPage } from "../RedirectToOtherPage";
import { useNavigate } from "react-router-dom";

import "../forms.scss";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 form-group">
            <h3 className="mb-3 subtitle">Login</h3>

            <div className="form-div">
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
                    buttonClass="mt-3 mb-3 purple-btn button-common"
                    buttonType="submit"
                    buttonText="Entrar"
                />
                <h4 className="text-center">OU</h4>
                <RedirectToOtherPage>
                    <Button
                        onClick={goToRegister}
                        buttonClass="mt-3 blue-btn button-common"
                        buttonType="button"
                        buttonText="Ir para Cadastro"
                    />
                </RedirectToOtherPage>
            </div>
        </form>
    );
};

export { FormLogin };
