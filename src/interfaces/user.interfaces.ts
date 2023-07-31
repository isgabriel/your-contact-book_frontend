import {
    userReqSchema,
    userLoginSchema,
    userSchema,
    userUpdateSchema,
} from "../schemas/user.schema";
import { z } from "zod";

type tUser = z.infer<typeof userSchema>;
type tUserReq = z.infer<typeof userReqSchema>;
type tUserLogin = z.infer<typeof userLoginSchema>;
type tUserUpdate = z.infer<typeof userUpdateSchema>;

export type { tUser, tUserReq, tUserLogin, tUserUpdate };
