import { z } from "zod";

const contactSchema = z.object({
    email: z
        .string()
        .email({ message: "Email é um campo obrigatório!" })
        .max(60, { message: "Quantidade máxima de caracteres é 60!" })
        .nonempty({ message: "Deve ser um Email válido!" }),
    fullname: z
        .string()
        .min(1, { message: "Este campo precisa ter pelo menos 1 caractere!" })
        .max(60, { message: "Quantidade máxima de caracteres é 60!" })
        .nonempty({ message: "Nome é um campo obrigatório!" }),
    telephone: z
        .string()
        .min(11, { message: "Telefone deve ter 11 caracteres!" })
        .max(11, { message: "Telefone deve ter 11 caracteres!" })
        .nonempty({ message: "Telefone é um campo obrigatório!" }),
});

export { contactSchema };
