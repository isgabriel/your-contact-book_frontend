import menuHamburguer from "../../../../assets/menu-hamburguer.svg";
import closeMenu from "../../../../assets/close-button.svg";
import { UserIcon } from "../../../../components/UserIcon";

import { PopupMenu } from "../../../../components/PopupMenu";

import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContactContext } from "../../../../context/ContactContext";
import { AuthContext } from "../../../../context/AuthContext";
import { UserContext } from "../../../../context/UserContext";

import "./style.scss";

export const Header = () => {
    const { user } = useContext(AuthContext);
    const { setEditUserModal } = useContext(UserContext);
    const [displayPopupMenu, setDisplayPopupMenu] = useState<boolean>(false);
    const [deleteCounter, setDeleteCounter] = useState<number>(1);

    const editUserEnableModal = () => {
        setDisplayPopupMenu(false);
        setTimeout(() => {
            setEditUserModal(true);
        }, 100);
    };

    const { deleteUser } = useContext(UserContext);
    const { setUser } = useContext(AuthContext);
    const { setContacts } = useContext(ContactContext);

    const popupMenuRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupMenuRef.current &&
                !popupMenuRef.current.contains(event.target as Node)
            ) {
                setDisplayPopupMenu(false);
                setDeleteCounter(1);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleDeleteContact = () => {
        if (deleteCounter == 1) {
            setDeleteCounter(deleteCounter + 1);
        } else {
            setUser(null);
            deleteUser();
        }
    };

    const logOut = () => {
        localStorage.removeItem("@contact-book: accessToken");
        localStorage.removeItem("@contact-book: userId");

        navigate("/login");
        setUser(null);
        setContacts([]);
    };

    return (
        <header className="w-100 dashboard-header">
            <div className="header-div p-3">
                <div className="icon-div">
                    <UserIcon initialLetter={user?.name[0]} />
                    <h2 className="user-name">{user?.name}</h2>
                </div>

                <div ref={popupMenuRef} className="popup-menu">
                    <button
                        onClick={() => setDisplayPopupMenu(!displayPopupMenu)}
                        className="button-menu"
                    >
                        <img
                            src={displayPopupMenu ? closeMenu : menuHamburguer}
                        />
                    </button>
                    <PopupMenu display={displayPopupMenu}>
                        <button
                            onClick={editUserEnableModal}
                            className="w-100 edit-btn menu-options"
                        >
                            Editar
                        </button>
                        <button
                            onClick={logOut}
                            className="w-100 logout-btn menu-options"
                        >
                            Sair
                        </button>
                        <button
                            onClick={handleDeleteContact}
                            className={
                                deleteCounter == 2
                                    ? "w-100 red-delete delete-acc-btn menu-options"
                                    : "w-100 delete-acc-btn menu-options"
                            }
                        >
                            {deleteCounter === 2
                                ? "Confirmar"
                                : "Excluir Conta"}
                        </button>
                    </PopupMenu>
                </div>
            </div>
        </header>
    );
};
