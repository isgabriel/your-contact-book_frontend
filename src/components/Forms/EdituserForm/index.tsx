/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputField } from "../InputField";

import { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUpdateSchema } from "../../../schemas/contact.schema";
import { UserContext } from "../../../context/UserContext";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { tUserUpdate } from "../../../interfaces/user.interfaces";
import { Button } from "../../Button";

const EdituserForm = () => {
    const { handlePhoneNumberChange, phoneNumber, setPhoneNumber } =
        useContext(ContactContext);
    const { updateUser } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactUpdateSchema),
        mode: "all",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
        },
    });

    const onSubmit = (data: tUserUpdate) => {
        if (data.name == "") {
            delete data.name;
        }
        if (data.email == "") {
            delete data.email;
        }
        if (data.phone == "") {
            delete data.phone;
        }
        if (data.password == "") {
            delete data.password;
        }
        setPhoneNumber("");
        updateUser(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-modal">
            <FormSectionField>
                <LabelField placeholder="Nome" />
                <InputField
                    required={false}
                    errors={errors.name?.message}
                    register={register("name")}
                    placeholder="nome"
                />
                {errors.name && <p>{errors.name.message}</p>}
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Email" />
                <InputField
                    required={false}
                    errors={errors.email?.message}
                    register={register("email")}
                    placeholder="email"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Telefone" />

                <InputField
                    required={false}
                    maxLength={16}
                    onChange={handlePhoneNumberChange}
                    value={phoneNumber}
                    errors={errors.phone?.message}
                    register={register("phone")}
                    placeholder="telefone"
                />

                {errors.phone && <p>{errors.phone.message}</p>}
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Senha" />

                <InputField
                    required={false}
                    type="password"
                    errors={errors.password?.message}
                    register={register("password")}
                    placeholder="senha"
                />

                {errors.password && <p>{errors.password.message}</p>}
            </FormSectionField>

            <div className="form-btns">
                <Button
                    className="mt-3 mb-3 purple-btn button-common"
                    type="submit"
                    text="Atualizar informações"
                />
            </div>
        </form>
    );
};

export { EdituserForm };
