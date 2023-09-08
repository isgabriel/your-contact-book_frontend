import { iChildrenProp } from "../../interfaces/children.interfaces";

import styles from "./styles.module.scss";

const Header = ({ children }: iChildrenProp) => {
    return <header className={styles.header}>{children}</header>;
};

export { Header };
