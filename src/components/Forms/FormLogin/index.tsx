/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema } from "../../../schemas/users.schemas";
import { InputField } from "../InputField";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";

interface iFormLoginValues {
    email: string;
    password: string;
}

const FormLogin = () => {
    const { login } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iFormLoginValues>({
        resolver: zodResolver(userLoginSchema),
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        login(data);
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <FormSectionField>
                    <LabelField placeholder="Email" />

                    <InputField
                        required={true}
                        errors={errors.email?.message}
                        register={register("email")}
                        placeholder="Email"
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
                        placeholder="Senha"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </FormSectionField>
                <button type="submit" className="btn btn-outline-dark">
                    Entrar
                </button>
            </div>
        </form>
    );
};

export { FormLogin };
