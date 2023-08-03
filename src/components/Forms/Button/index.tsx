import "./style.scss";

interface iButtonProps {
    buttonText: string;
    buttonClass?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({
    buttonText,
    buttonClass,
    buttonType,
    onClick,
}: iButtonProps) => {
    return (
        <button className={buttonClass} type={buttonType} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export { Button };
