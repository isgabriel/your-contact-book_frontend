import z from "zod";
// import { phoneRegex } from "./contact.schema";
// import { noUserContactSchema } from "./contact.schema";

const userSchema = z.object({
    email: z
        .string()
        .email({ message: "Email é um campo obrigatório!" })
        .max(60, { message: "Quantidade máxima de caracteres é 60!" })
        .nonempty({ message: "Deve ser um Email válido!" }),
    fullname: z
        .string()
        .min(1, { message: "Nome é um campo obrigatório!" })
        .max(60, { message: "Quantidade máxima de caracteres é 60!" })
        .nonempty({ message: "Nome é obrigatório!" }),
    telephone: z
        .string()
        .min(11, { message: "Telefone deve ter 11 caracteres!" })
        .max(11, { message: "Telefone deve ter 11 caracteres!" })
        .nonempty({ message: "Telefone é um campo obrigatório!" }),
    // .regex(phoneRegex, "Deve estar nesse formato: (00) 000000000")
    password: z
        .string()
        .regex(new RegExp(".*[A-Z].*"), {
            message: "Use ao menos uma letra maiúscula",
        })
        .regex(new RegExp(".*[a-z].*"), {
            message: "Use ao menos uma letra minúscula",
        })
        .regex(new RegExp(".*\\d.*"), { message: "Use ao menos um número" })
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
            message: "Use ao menos um caractere especial",
        })
        .min(8, { message: "Senha deve ter ao menos 8 caracteres!" })
        .max(120, { message: "Senha só pode ter até 120 caracteres!" }),
});

const userLoginSchema = z.object({
    email: z.string().nonempty({ message: "Campo obrigatório!" }),
    password: z.string().nonempty({ message: "Campo obrigatório!" }),
});

export { userSchema, userLoginSchema };

// const userReqSchema = userSchema
//     .omit({ id: true, registerDate: true, contacts: true })
//     .extend({ confirmPassword: z.string().max(256) })
//     .refine((data) => data.password === data.confirmPassword, {
//         message: "As senhas devem coincidir",
//         path: ["confirmPassword"],
//     });

// const userUpdateSchema = userSchema
//     .omit({ id: true, registerDate: true, contacts: true })
//     .partial();

// const noPasswordUserSchema = userSchema.omit({ password: true });

// const noPasswordNoContactsUserSchema = noPasswordUserSchema.omit({
//     contacts: true,
// });

// export {
//     userSchema,
//     userReqSchema,
//     noPasswordUserSchema,
//     noPasswordNoContactsUserSchema,
//     userUpdateSchema,
//     userLoginSchema,
// };
