import { z } from "zod";
import {
    contactSchema,
    contactSchemaRequest,
    contactUpdateSchema,
} from "../schemas/contacts.schemas";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactUpdate = z.infer<typeof contactUpdateSchema>;

export type { TContact, TContactRequest, TContactUpdate };
