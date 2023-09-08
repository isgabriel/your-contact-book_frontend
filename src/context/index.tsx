import { ContactProvider } from "./ContactContext";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { MenuProvider } from "./MenuContext";

interface iContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <MenuProvider>
            <UserProvider>
                <ContactProvider>
                    <AuthProvider>{children}</AuthProvider>
                </ContactProvider>
            </UserProvider>
        </MenuProvider>
    );
};
