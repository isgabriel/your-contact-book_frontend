/* eslint-disable @typescript-eslint/no-explicit-any */

import { InputField } from "../../../components/Forms/InputField";

import { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUpdateSchema } from "../../../schemas/contact.schema";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { Button } from "../../Button";

const EditContactForm = () => {
    const { handlePhoneNumberChange, phoneNumber, updateContact } =
        useContext(ContactContext);

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
            phone: "",
        },
    });

    const onSubmit = (data: any) => {
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
        updateContact(data);
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
            <div className="form-btns">
                <Button
                    className="mt-3 mb-3 purple-btn button-common"
                    type="submit"
                    text="Atualizar contato"
                />
            </div>
        </form>
    );
};

export { EditContactForm };
