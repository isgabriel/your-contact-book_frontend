interface iButtonProps {
    text: string;
    className: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ text, className, type, onClick }: iButtonProps) => {
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};
export { Button };
