import styles from "./styles.module.scss";

const NoticeAboutApi = () => {
    return (
        <p className={styles.noticeAboutAPI}>
            Utilizamos hopedagem gratuita para o nosso banco de dados, por isso
            as requisições tendem a demorar um pouco. Caso ocorra qualquer erro,
            pedimos que tente novamente em alguns instantes.
        </p>
    );
};
export { NoticeAboutApi };
