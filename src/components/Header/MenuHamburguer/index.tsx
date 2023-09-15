import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";

import menuHamburguer from "../../../assets/menu-hamburguer.svg";
import closeButton from "../../../assets/close-button.svg";

import styles from "./styles.module.scss";

const MenuHamburguer = () => {
    const { menu, handleMenu } = useContext(MenuContext);
    return (
        <button onClick={handleMenu} className={styles.menuHamburguer}>
            <img src={menu ? closeButton : menuHamburguer} alt="button-menu" />
        </button>
    );
};

export { MenuHamburguer };
