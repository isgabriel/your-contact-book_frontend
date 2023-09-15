import { useContext } from "react";
import { iChildrenProp } from "../../interfaces/children.interfaces";

import styles from "./styles.module.scss";
import { UserContext } from "../../context/UserContext";

const Header = ({ children }: iChildrenProp) => {
    const { loggedUser } = useContext(UserContext);
    return (
        <header
            className={
                loggedUser ? styles.headerLogged : styles.headerNotLogged
            }
        >
            {children}
        </header>
    );
};

export { Header };
