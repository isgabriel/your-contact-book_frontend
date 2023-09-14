// import {
//     // userReqSchema,
//     userLoginSchema,
//     userSchema,
//     // userUpdateSchema,
// } from "../schemas/user.schema";
// import { z } from "zod";

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

export type { iUser, iLogin };
// type tUser = z.infer<typeof userSchema>;
// type tUserReq = z.infer<typeof userReqSchema>;
// type tUserLogin = z.infer<typeof userLoginSchema>;
// type tUserUpdate = z.infer<typeof userUpdateSchema>;

// export type { tUser, tUserReq, tUserLogin, tUserUpdate };
