import { styled } from "styled-components";

const AddContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    > input {
        padding: 18px 18px;
        border-radius: 20px;
        background-color: #ffffff;
        width: 100%;
        max-height: 64px;
        font-size: var(--text-1);
        font-weight: var(--Medium);
        user-select: none;
        overflow: hidden;
    }
`;

const Addbutton = styled.button`
    height: 64px;
    width: 100%;

    padding: 5px;

    color: var(--color-grey-1);
    background-color: var(--color-grey-3);

    border-radius: 6px;

    font-size: 15px;

    border: 0;
`;

export { AddContactDiv, Addbutton };
