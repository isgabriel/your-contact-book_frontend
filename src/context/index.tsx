import { ContactProvider } from "./ContactContext";
import { UserProvider } from "./UserContext";
import { MenuProvider } from "./MenuContext";
import { ModalProvider } from "./ModalContext";

interface iContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <MenuProvider>
            <ModalProvider>
                <UserProvider>
                    <ContactProvider>{children}</ContactProvider>
                </UserProvider>
            </ModalProvider>
        </MenuProvider>
    );
};
