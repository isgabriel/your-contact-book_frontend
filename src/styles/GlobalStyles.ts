import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }

    :root {
        --total-white : #FFFFFF;
        
        --color-grey-1: #FAF3F0;
        --color-grey-2: #8062D6;
        --color-grey-3: #322653;
        --color-grey-4: #DDE6ED;

        --color-red: #FF4A4A;
    }

    button{
        cursor: pointer;
        transition: 0.3s;
    }

    button:active{
        transform: translateY(2px);
    }

`;
