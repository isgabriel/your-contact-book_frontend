import { iChildrenProp } from "../../interfaces/children.interfaces";

import styles from "./styles.module.scss";

const Title = ({ children }: iChildrenProp) => {
    return <h1 className={styles.title}>{children}</h1>;
};

export { Title };
