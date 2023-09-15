import { iLogin, iUser, iUserUpdate } from "../../interfaces/user.interfaces";

interface iUserContext {
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    personalInfo: iUserUpdate | undefined;
    setPersonalInfo: React.Dispatch<
        React.SetStateAction<iUserUpdate | undefined>
    >;
    loggedUser: iUser | null;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    signUp: (data: iUser) => Promise<void>;
    login: (data: iLogin) => Promise<void>;
    logout: () => void;
    patchUser: (data: iUserUpdate) => Promise<void>;
    deleteUser: () => Promise<void>;
}

export type { iUserContext };
