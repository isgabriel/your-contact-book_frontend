/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../../../components/Forms/InputField";
import { StyledButton } from "../../../styles/Button";

import { useForm } from "react-hook-form";
import { userReqSchema } from "../../../schemas/user.schema";

import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { ContactContext } from "../../../context/ContactContext";

import { zodResolver } from "@hookform/resolvers/zod";
import { LabelField } from "../LabelField";
import { FormSectionField } from "../FormSectionField";
import { RedirectToOtherPage } from "../RedirectToOtherPage";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormSectionField>
                <LabelField placeholder="Nome" />
                <InputField
                    required={true}
                    errors={errors.name?.message}
                    register={register("name")}
                    placeholder="nome"
                />
                {errors.name && <p>{errors.name.message}</p>}
            </FormSectionField>

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

            <FormSectionField>
                <LabelField placeholder="Confirmar senha" />

                <InputField
                    required={true}
                    type="password"
                    errors={errors.confirmPassword?.message}
                    register={register("confirmPassword")}
                    placeholder="confirmar senha"
                />

                {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message}</p>
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
                    placeholder="telefone"
                />

                {errors.phone && <p>{errors.phone.message}</p>}
            </FormSectionField>

            <StyledButton type="submit">Cadastrar</StyledButton>

            <RedirectToOtherPage>
                <h4>Já possui conta?</h4>
                <button onClick={goToLogin} className="redirect-button">
                    Ir para Login
                </button>
            </RedirectToOtherPage>
        </form>
    );
};

export { FormRegister };
