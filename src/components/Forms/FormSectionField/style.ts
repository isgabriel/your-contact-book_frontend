import { styled } from "styled-components";

const StyledFormSectionField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    > label {
        pointer-events: none;

        padding: 5px;

        transition: 0.3s ease;
    }
    > input {
        padding: 18px 18px;
        border-radius: 20px;
        background-color: #ffffff;

        width: 100%;
        max-height: 64px;

        display: flex;
        justify-content: flex-start;
        gap: 12px;

        font-size: var(--text-1);
        font-weight: var(--Medium);

        user-select: none;

        overflow: hidden;
    }
    > p {
        margin-top: 10px;
        color: rgb(168, 28, 28);
        font-size: 12px;
        font-style: italic;
    }
`;

export { StyledFormSectionField };
