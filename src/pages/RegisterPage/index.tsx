/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";

import { FormRegister } from "../../components/Forms/FormRegister";
import { MenuContext } from "../../context/MenuContext";
import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { MenuHamburguer } from "../../components/Header/MenuHamburguer";
import { Navbar } from "../../components/Header/Navbar";

import styles from "./styles.module.scss";

const RegisterPage = () => {
    const { menu } = useContext(MenuContext);

    return (
        <>
            {menu && <Menu />}
            <Header>
                <MenuHamburguer />
                <div>
                    <p>icon</p>

                    <Navbar />
                </div>
            </Header>

            <span className={styles.bgImg}></span>

            <FormRegister />
        </>
    );
};

export { RegisterPage };
