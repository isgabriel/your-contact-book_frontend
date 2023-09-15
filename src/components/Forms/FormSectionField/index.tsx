import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface iFormSectionField {
    children: ReactNode;
}
const FormSectionField = ({ children }: iFormSectionField) => {
    return <div className={styles.formSectionField}>{children}</div>;
};

export { FormSectionField };
