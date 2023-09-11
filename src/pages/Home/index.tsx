// import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { MenuHamburguer } from "../../components/Header/MenuHamburguer";

import styles from "./styles.module.scss";
import { Navbar } from "../../components/Header/Navbar";
import { MenuContext } from "../../context/MenuContext";
import { Menu } from "../../components/Menu";

const Home = () => {
    const { menu } = useContext(MenuContext);
    // const navigate = useNavigate();
    return (
        <>
            {menu && <Menu />}
            <span className={styles.bgImg}></span>
            <Header>
                <MenuHamburguer />
                <div>
                    <p>icon</p>

                    <Navbar />
                </div>
            </Header>

            <main className={styles.mainContainerHome}>
                <Title>
                    Sua <span>agenda de contatos online </span> completamente
                    segura
                </Title>
                <p>
                    Armazene seus contatos de forma fácil e 100% segura na
                    Contact Book.
                </p>

                {/* <button onClick={() => navigate("/login")}>Ir ao login</button>
                <button onClick={() => navigate("/tests")}>
                    Ir aos testes
                </button> */}
            </main>
        </>
    );
};

export { Home };
