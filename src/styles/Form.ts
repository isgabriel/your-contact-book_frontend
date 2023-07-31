import styled from "styled-components";

export const StyledForm = styled.div`
    overflow-y: scroll;

    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    > div {
        border-radius: 15px;

        background-color: var(--color-grey-4);

        padding: 20px;

        width: 100%;
        max-width: 450px;
    }

    header {
        width: 100%;
        margin-bottom: 23px;

        h1 {
            color: var(--color-grey-3);

            font-weight: 700;
        }
        h3 {
            font-weight: 700;
            font-size: 30px;
        }
    }

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 23px;
    }
`;
