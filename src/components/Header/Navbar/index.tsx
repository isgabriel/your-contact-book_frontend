import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user ? (
                <nav className={styles.loggedNavbar}>
                    <button>EDITAR PERFIL</button>
                    <button>EXCLUIR CONTA</button>
                    <button>SAIR</button>
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
