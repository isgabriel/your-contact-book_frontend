interface iLabelProps {
    placeholder: string;
}
const LabelField = ({ placeholder }: iLabelProps) => {
    return (
        <>
            <label htmlFor={placeholder}>{placeholder}</label>
        </>
    );
};

export { LabelField };
