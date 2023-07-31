import { tUser } from "../../interfaces/user.interfaces";
import { tUserLogin } from "../../interfaces/user.interfaces";

interface iAuthProviderProps {
    children: React.ReactNode;
}

interface iAuthContextProps {
    user: tUser | null;
    setUser: React.Dispatch<React.SetStateAction<tUser | null>>;
    login: (data: tUserLogin) => Promise<void>;
}

export type { iAuthContextProps, iAuthProviderProps };
