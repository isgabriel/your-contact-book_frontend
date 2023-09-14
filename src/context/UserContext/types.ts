import { iLogin, iUser } from "../../interfaces/user.interfaces";

interface iUserContext {
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    loggedUser: iUser | null;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    signUp: (data: iUser) => Promise<void>;
    login: (data: iLogin) => Promise<void>;
    logout: () => void;
    patchUser: (data: iUser) => Promise<void>;
    deleteUser: () => Promise<void>;
}

export type { iUserContext };
