import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.white};
        font-size: 1.6rem;
    }

`;