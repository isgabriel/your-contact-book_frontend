import "react-toastify/dist/ReactToastify.css";

import { ContactProvider } from "./ContactContext";
import { UserProvider } from "./UserContext";
import { MenuProvider } from "./MenuContext";
import { ModalProvider } from "./ModalContext";
import { ToastContainer } from "react-toastify";

interface iContextProviderProps {
    children: React.ReactNode;
}

export const ContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <MenuProvider>
            <ModalProvider>
                <UserProvider>
                    <ContactProvider>
                        {children}
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </ContactProvider>
                </UserProvider>
            </ModalProvider>
        </MenuProvider>
    );
};
