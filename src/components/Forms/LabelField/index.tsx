import { iFormProps } from "../type";

const LabelField = ({ placeholder }: iFormProps) => {
    return (
        <>
            <label htmlFor={placeholder}>{placeholder}</label>
        </>
    );
};

export { LabelField };
