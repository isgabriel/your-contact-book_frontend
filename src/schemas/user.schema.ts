import z from "zod";
import { phoneRegex } from "./contact.schema";
import { noUserContactSchema } from "./contact.schema";

const userSchema = z.object({
    id: z.number(),
    name: z
        .string()
        .max(126, "O seu nome deve conter no máximo 256 caracteres")
        .min(3, "O nome de usuário deve conter no minimo 3 caracteres"),
    email: z.string().email().max(126),
    password: z
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .max(126)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])/g,
            "A senha deve conter pelo menos uma letra maiúscula e uma letra minúscula"
        ),
    phone: z
        .string()
        .max(20)
        .regex(phoneRegex, "Invalid phone number. Example: +00 00 000000000"),
    registerDate: z.string(),
    contacts: z.array(noUserContactSchema),
});

const userReqSchema = userSchema
    .omit({ id: true, registerDate: true, contacts: true })
    .extend({ confirmPassword: z.string().max(256) })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas devem coincidir",
        path: ["confirmPassword"],
    });

const userLoginSchema = userSchema
    .omit({
        id: true,
        registerDate: true,
        contacts: true,
        name: true,
        phone: true,
        password: true,
    })
    .extend({ password: z.string() });

const userUpdateSchema = userSchema
    .omit({ id: true, registerDate: true, contacts: true })
    .partial();

const noPasswordUserSchema = userSchema.omit({ password: true });

const noPasswordNoContactsUserSchema = noPasswordUserSchema.omit({
    contacts: true,
});

export {
    userSchema,
    userReqSchema,
    noPasswordUserSchema,
    noPasswordNoContactsUserSchema,
    userUpdateSchema,
    userLoginSchema,
};
