/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

const phoneRegex = /^\+\d{2}\s\d{2}\s\d{9}$/;

const contactSchema: z.ZodObject<any> = z.object({
    id: z.number(),
    name: z.string().max(123),
    email: z.string().email().max(123),
    phone: z
        .string()
        .max(20)
        .regex(
            phoneRegex,
            "Invalid phone number, must be like: +00 00 000000000"
        ),
    createdAt: z.string(),
});

const noUserContactSchema = contactSchema.omit({ user: true });

const contactReqSchema = noUserContactSchema.omit({
    id: true,
    createdAt: true,
});

const contactUpdateSchema = z.object({
    name: z.string().max(123),
    email: z.string().max(123),
    phone: z.string().max(20),
});

export {
    phoneRegex,
    contactSchema,
    noUserContactSchema,
    contactReqSchema,
    contactUpdateSchema,
};
