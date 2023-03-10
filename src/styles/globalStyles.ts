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
        font-family: ${({ theme }) => theme.font.family.default};
        font-size: 1.6rem;
    }

`;