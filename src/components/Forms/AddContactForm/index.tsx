/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactReqSchema } from "../../../schemas/contact.schema";
import { tContactReq } from "../../../interfaces/contact.interfaces";

import { ContactContext } from "../../../context/ContactContext";
import { LabelField } from "../LabelField";
import { InputField } from "../InputField";
import { FormSectionField } from "../FormSectionField";
import { ErrorMessage } from "../ErrorMessage";

import "./style.scss";
import { Button } from "../../Button";

const AddContactForm = () => {
    const { setPhoneNumber, createContact } = useContext(ContactContext);

    const { handlePhoneNumberChange, phoneNumber } = useContext(ContactContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactReqSchema),
        mode: "all",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = (data: tContactReq) => {
        createContact(data);
        reset();
        setPhoneNumber("");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-add-contacts">
            <div className="inputs-div">
                <FormSectionField>
                    <LabelField placeholder="Nome" />

                    <InputField
                        required={true}
                        errors={errors.name?.message}
                        register={register("name")}
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
                    />
                    {errors.email && (
                        <ErrorMessage
                            className="error-msg"
                            message={errors.email.message}
                        />
                    )}
                </FormSectionField>

                <FormSectionField>
                    <LabelField placeholder="Telefone" />

                    <InputField
                        required={true}
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                        errors={errors.phone?.message}
                        register={register("phone")}
                    />
                    {errors.phone && (
                        <ErrorMessage
                            className="error-msg"
                            message={errors.phone.message}
                        />
                    )}
                </FormSectionField>
            </div>
            <Button
                className="purple-btn button-common"
                type="submit"
                text="Adicionar contato"
            />
        </form>
    );
};

export { AddContactForm };
