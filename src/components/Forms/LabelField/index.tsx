import styles from "./styles.module.scss";

interface iLabelProps {
    placeholder: string;
}
const LabelField = ({ placeholder }: iLabelProps) => {
    return (
        <>
            <label htmlFor={placeholder} className={styles.label}>
                {placeholder}
            </label>
        </>
    );
};

export { LabelField };
