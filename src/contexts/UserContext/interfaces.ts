import { ReactNode } from "react";
import { TUserLogin } from "../../interfaces/users.interfaces";

interface iUserProviderProps {
    children: ReactNode;
}

interface iLoginResponse {
    token: string;
}

interface iUserContextValues {
    loading: boolean;
    login: (data: TUserLogin) => void;
}

export type { iUserProviderProps, iLoginResponse, iUserContextValues };
