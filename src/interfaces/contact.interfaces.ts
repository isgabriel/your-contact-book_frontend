import { z } from "zod";
import {
    contactReqSchema,
    contactSchema,
    contactUpdateSchema,
} from "../schemas/contact.schema";

type tContact = z.infer<typeof contactSchema>;
type tContactReq = z.infer<typeof contactReqSchema>;
type tContactUpdate = z.infer<typeof contactUpdateSchema>;

export type { tContact, tContactReq, tContactUpdate };
