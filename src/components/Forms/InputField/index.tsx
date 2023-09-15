/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./styles.module.scss";

interface iInputFieldProps {
    type?: string;
    placeholder?: string;
    errors?: any;
    register?: object;
    value?: string;
    defaultValue?: string;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({
    type,
    placeholder,
    defaultValue,
    onChange,
    register,
    value,
    required,
}: iInputFieldProps) => {
    return (
        <>
            <input
                value={value}
                {...register}
                onChange={onChange}
                required={required}
                id={placeholder}
                type={type}
                placeholder={placeholder}
                className={styles.inputClass}
                defaultValue={defaultValue}
            />
        </>
    );
};
