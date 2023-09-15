import { useContext } from "react";
import { FormLogin } from "../../components/Forms/FormLogin";

import styles from "./styles.module.scss";
import { MenuContext } from "../../context/MenuContext";
import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { MenuHamburguer } from "../../components/Header/MenuHamburguer";
import { Navbar } from "../../components/Header/Navbar";
import { NoticeAboutApi } from "../../components/NoticeAboutApi";

const LoginPage = () => {
    const { menu } = useContext(MenuContext);

    return (
        <>
            {menu && <Menu />}
            <NoticeAboutApi />
            <Header>
                <MenuHamburguer />
                <div>
                    <p>icon</p>

                    <Navbar />
                </div>
            </Header>

            <span className={styles.bgImg}></span>

            <FormLogin />
        </>
    );
};

export { LoginPage };
