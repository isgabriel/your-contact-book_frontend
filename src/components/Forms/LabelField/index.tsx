import "./style.scss";

interface iLabelProps {
    placeholder: string;
}
const LabelField = ({ placeholder }: iLabelProps) => {
    return (
        <>
            <label htmlFor={placeholder} className="label">
                {placeholder}
            </label>
        </>
    );
};

export { LabelField };
