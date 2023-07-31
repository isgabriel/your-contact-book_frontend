/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { InputField } from "../InputField";
import { StyledButton } from "../../../styles/Button";

import { useForm } from "react-hook-form";
import { userLoginSchema } from "../../../schemas/user.schema";

import { AuthContext } from "../../../context/AuthContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { RedirectToOtherPage } from "../RedirectToOtherPage";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSectionField>
                <LabelField placeholder="Email" />

                <InputField
                    required={true}
                    errors={errors.email?.message}
                    register={register("email")}
                    placeholder="email"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </FormSectionField>
            <FormSectionField>
                <LabelField placeholder="Senha" />
                <InputField
                    required={true}
                    type="password"
                    errors={errors.password?.message}
                    register={register("password")}
                    placeholder="senha"
                />
                {errors.password && <p>{errors.password.message}</p>}
            </FormSectionField>
            <StyledButton type="submit">Entrar</StyledButton>
            <RedirectToOtherPage>
                <h4>Não possui uma conta?</h4>
                <button onClick={goToRegister} className="redirect-button">
                    Ir para Cadastro
                </button>
            </RedirectToOtherPage>
        </form>
    );
};

export { FormLogin };
