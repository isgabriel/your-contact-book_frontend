/* eslint-disable react-hooks/exhaustive-deps */
import { CloseButton } from "react-bootstrap";
import { ContactContext } from "../../context/ContactContext";
import { UserContext } from "../../context/UserContext";

import { useContext, useEffect, useRef } from "react";
import "./style.scss";
import { createPortal } from "react-dom";

interface iModalProps {
    children: React.ReactNode;
    title?: string;
}

export const Modal = ({ children, title }: iModalProps) => {
    const { setIsOpen, setEditContactModal, setEditContactId } =
        useContext(ContactContext);
    const { setEditUserModal } = useContext(UserContext);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
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
        setIsOpen(false);
        setEditContactModal(false);
        setEditUserModal(false);
        setEditContactId(null);
    };
    return createPortal(
        <div className="modal-bg">
            <div ref={modalRef} className="modal-div">
                <section className="mb-5 modal-header ">
                    <h2>{title}</h2>
                    <CloseButton onClick={closeModal} />
                </section>
                {children}
            </div>
        </div>,
        document.body
    );
};
