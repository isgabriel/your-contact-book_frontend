/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactReqSchema } from "../../../schemas/contact.schema";
import { tContactReq } from "../../../interfaces/contact.interfaces";

import { ContactContext } from "../../../context/ContactContext";
import { LabelField } from "../LabelField";
import { InputField } from "../InputField";

import { AddContactDiv, Addbutton } from "./style";

const AddContactForm = () => {
    const [_, setIsOpen] = useState<boolean>(false);
    const { setPhoneNumber, createContact } = useContext(ContactContext);

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
        setIsOpen(false);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <AddContactDiv>
                <LabelField placeholder="Nome" />

                <InputField
                    required={true}
                    errors={errors.name?.message}
                    register={register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </AddContactDiv>

            <AddContactDiv>
                <LabelField placeholder="Email" />

                <InputField
                    required={true}
                    errors={errors.email?.message}
                    register={register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </AddContactDiv>

            <AddContactDiv>
                <LabelField placeholder="Telefone" />

                <InputField
                    required={true}
                    errors={errors.phone?.message}
                    register={register("phone")}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </AddContactDiv>
            <Addbutton type="submit">Adicionar</Addbutton>
        </form>
    );
};

export { AddContactForm };
