import { ContactProvider } from "./ContactContext";
import { UserProvider } from "./UserContext";

interface iContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <UserProvider>
            <ContactProvider>{children}</ContactProvider>
        </UserProvider>
    );
};

export { ContextProvider };
