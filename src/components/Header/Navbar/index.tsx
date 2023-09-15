import { useContext } from "react";

import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { MenuContext } from "../../../context/MenuContext";
import { useModal } from "../../../hooks/modalHook";

import styles from "./styles.module.scss";

const Navbar = () => {
    const { loggedUser, logout } = useContext(UserContext);
    const { setShowModal } = useModal();
    const { setMenu } = useContext(MenuContext);

    const handleEditProfile = () => {
        setMenu(false);
        setShowModal("editProfile");
    };

    const handleDeleteProfile = () => {
        setShowModal("deleteProfile");
        setMenu(false);
    };

    return (
        <>
            {loggedUser ? (
                <nav className={styles.loggedNavbar}>
                    <button onClick={handleEditProfile}>EDITAR PERFIL</button>
                    <button onClick={handleDeleteProfile}>EXCLUIR CONTA</button>
                    <button onClick={logout}>SAIR</button>
                </nav>
            ) : (
                <nav className={styles.notLoggedNavbar}>
                    <Link to="/">HOME</Link>
                    <Link to="/register">CADASTRO</Link>
                    <Link to="/login">LOGIN</Link>
                </nav>
            )}
        </>
    );
};

export { Navbar };
