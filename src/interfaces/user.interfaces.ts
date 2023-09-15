import { z } from "zod";
import { userUpdateSchema } from "../schemas/user.schema";

interface iUser {
    id?: number;
    fullname: string;
    telephone: string;
    password: string;
    email: string;
}

interface iLogin {
    email: string;
    password: string;
}

type iUserUpdate = z.infer<typeof userUpdateSchema>;

export type { iUser, iLogin, iUserUpdate };
