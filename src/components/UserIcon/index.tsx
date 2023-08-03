import "./style.scss";

interface iUserIconProps {
    initialLetter?: string;
}

export const UserIcon = ({ initialLetter }: iUserIconProps) => {
    return (
        <figure className="figure-icon">
            <span>{initialLetter?.toUpperCase() || "C"}</span>
        </figure>
    );
};
