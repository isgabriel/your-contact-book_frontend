import { createContext, useState, useRef } from "react";
import { IModalContext } from "./types";
import { iChildrenProp } from "../../interfaces/children.interfaces";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: iChildrenProp) => {
    const [showModal, setShowModal] = useState<string>("");

    const popupMenuRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setShowModal("");
    };

    return (
        <ModalContext.Provider
            value={{
                showModal,
                setShowModal,
                closeModal,
                popupMenuRef,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
