import { InputField } from "../../../components/Forms/InputField";

import { useContext } from "react";
import { ContactContext } from "../../../context/ContactContext";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../../schemas/contact.schema";
import { FormSectionField } from "../FormSectionField";
import { LabelField } from "../LabelField";
import { Button } from "../../Button";
import { iContact } from "../../../interfaces/contact.interfaces";

import FormStyled from "../forms.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";

const EditContactForm = () => {
    const { patchContact, selectedContactId, contact } =
        useContext(ContactContext);
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<iContact>({
        resolver: zodResolver(contactSchema),
    });

    const idContact: number = selectedContactId!;
    const contactInfos = contact.filter(
        (singleContact) => singleContact.id === idContact
    );

    const onSubmit = (data: iContact) => {
        patchContact(data, idContact);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={FormStyled.formModal}
        >
            <FormSectionField>
                <LabelField placeholder="Nome" />
                <InputField
                    errors={errors.fullname?.message}
                    defaultValue={contactInfos[0].fullname}
                    register={register("fullname")}
                    placeholder="nome"
                />
                {errors.fullname && <p>{errors.fullname.message}</p>}
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Email" />
                <InputField
                    errors={errors.email?.message}
                    defaultValue={contactInfos[0].email}
                    register={register("email")}
                    placeholder="email"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </FormSectionField>

            <FormSectionField>
                <LabelField placeholder="Telefone" />

                <InputField
                    errors={errors.telephone?.message}
                    defaultValue={contactInfos[0].telephone}
                    register={register("telephone")}
                    placeholder="telefone"
                />

                {errors.telephone && <p>{errors.telephone.message}</p>}
            </FormSectionField>
            <div className={FormStyled.formBtns}>
                <Button
                    className={ButtonStyled.secondaryButton}
                    type="submit"
                    text="Atualizar contato"
                />
            </div>
        </form>
    );
};

export { EditContactForm };
