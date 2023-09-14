import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

import styles from "./styles.module.scss";

const AddContactSection = () => {
    const { setShowModal } = useContext(ModalContext);

    const handleClick = () => {
        setShowModal("addContact");
    };

    return (
        <section className={styles.addContactsContainer}>
            <div className={styles.addContactsDiv}>
                <h1>Contatos</h1>
                <button onClick={handleClick} className={styles.addBtn}>
                    +
                </button>
            </div>
        </section>
    );
};

export { AddContactSection };
