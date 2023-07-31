/* eslint-disable react-hooks/exhaustive-deps */
import { CloseButton } from "react-bootstrap";
import { ContactContext } from "../../context/ContactContext";
import { UserContext } from "../../context/UserContext";
import { StyledModal } from "./styled";

import { useContext, useEffect, useRef } from "react";

interface iModalProps {
    children: React.ReactNode;
    title?: string;
}

export const Modal = ({ children, title }: iModalProps) => {
    const { setEditContactModal, setEditContactId } =
        useContext(ContactContext);
    const { setEditUserModal } = useContext(UserContext);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setEditContactModal(false);
                setEditUserModal(false);
                setEditContactId(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const closeModal = () => {
        window.location.reload();
    };
    return (
        <StyledModal>
            <div ref={modalRef} className="modal-div">
                <header className="modal-header">
                    <h2>{title}</h2>
                    <CloseButton onClick={closeModal} />
                </header>
                {children}
            </div>
        </StyledModal>
    );
};
