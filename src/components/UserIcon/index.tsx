import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./style.scss";

interface iUserIconProps {
    initialLetter?: string;
}

export const UserIcon = ({ initialLetter }: iUserIconProps) => {
    const { loggedUser } = useContext(UserContext);

    return (
        <figure className="figure-icon">
            {loggedUser?.fullname ? (
                <span>{initialLetter?.toUpperCase()}</span>
            ) : (
                <span>C</span>
            )}
        </figure>
    );
};
