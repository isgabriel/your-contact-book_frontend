import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { MenuHamburguer } from "../Header/MenuHamburguer";

import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { UserContext } from "../../context/UserContext";

import { Navbar } from "../Header/Navbar";

const Menu = () => {
    const { menu, handleMenu } = useContext(MenuContext);
    const { loggedUser } = useContext(UserContext);

    return (
        <section className={styles.menuBg}>
            <div className={styles.menuContainer}>
                {menu && <MenuHamburguer />}
                <div>
                    {loggedUser ? (
                        <Navbar />
                    ) : (
                        <>
                            <Link to="/" onClick={handleMenu}>
                                HOME
                            </Link>
                            <Link to="/register" onClick={handleMenu}>
                                CADASTRO
                            </Link>
                            <Link to="/login" onClick={handleMenu}>
                                LOGIN
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export { Menu };
