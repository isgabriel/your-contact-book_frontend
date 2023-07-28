import { z } from "zod";
import {
    userLoginSchema,
    userSchema,
    userSchemaRequest,
    userUpdateSchema,
} from "../schemas/users.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserLogin = z.infer<typeof userLoginSchema>;
type TUserUpdate = z.infer<typeof userUpdateSchema>;

export type { TUser, TUserRequest, TUserLogin, TUserUpdate };
