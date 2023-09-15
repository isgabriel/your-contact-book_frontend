import logo from "../../assets/logo.svg";

import styles from "./styles.module.scss";

const Logo = () => {
    return (
        <a href="https://your-contact-book.vercel.app">
            <img src={logo} alt="logo" className={styles.logo} />
        </a>
    );
};

export { Logo };
