import { useContext } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../../schemas/contact.schema";
import { iContact } from "../../../interfaces/contact.interfaces";

import { ContactContext } from "../../../context/ContactContext";
import { LabelField } from "../LabelField";
import { InputField } from "../InputField";
import { FormSectionField } from "../FormSectionField";
import { ErrorMessage } from "../ErrorMessage";
import { Button } from "../../Button";

import styles from "./styles.module.scss";
import ButtonStyled from "../../Button/styles.module.scss";
import FormStyled from "../forms.module.scss";

const AddContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<iContact>({
        resolver: zodResolver(contactSchema),
    });

    const { createContact } = useContext(ContactContext);

    const onSubmit = (data: iContact) => {
        createContact(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formAddContacts}
        >
            <div className={styles.inputsDiv}>
                <FormSectionField>
                    <LabelField placeholder="Nome" />

                    <InputField
                        errors={errors.fullname?.message}
                        register={register("fullname")}
                    />
                    {errors.fullname && (
                        <ErrorMessage
                            className={FormStyled.errorMsg}
                            message={errors.fullname.message}
                        />
                    )}
                </FormSectionField>

                <FormSectionField>
                    <LabelField placeholder="Email" />

                    <InputField
                        errors={errors.email?.message}
                        register={register("email")}
                    />
                    {errors.email && (
                        <ErrorMessage
                            className={FormStyled.errorMsg}
                            message={errors.email.message}
                        />
                    )}
                </FormSectionField>

                <FormSectionField>
                    <LabelField placeholder="Telefone" />

                    <InputField
                        errors={errors.telephone?.message}
                        register={register("telephone")}
                    />
                    {errors.telephone && (
                        <ErrorMessage
                            className={FormStyled.errorMsg}
                            message={errors.telephone.message}
                        />
                    )}
                </FormSectionField>
            </div>

            <Button
                className={ButtonStyled.secondaryButton}
                type="submit"
                text="Adicionar contato"
            />
        </form>
    );
};

export { AddContactForm };
