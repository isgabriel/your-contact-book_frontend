import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import styles from "./styles.module.scss";

interface iUserIconProps {
    initialLetter?: string;
}

export const UserIcon = ({ initialLetter }: iUserIconProps) => {
    const { loggedUser } = useContext(UserContext);

    return (
        <figure className={styles.figureIcon}>
            {loggedUser?.fullname ? (
                <span>{initialLetter?.toUpperCase()}</span>
            ) : (
                <span>C</span>
            )}
        </figure>
    );
};
