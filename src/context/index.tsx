import { ContactProvider } from "./ContactContext";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";

interface iContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <UserProvider>
            <ContactProvider>
                <AuthProvider>{children}</AuthProvider>
            </ContactProvider>
        </UserProvider>
    );
};
