import styled, { css } from 'styled-components';

export const Conteiner = styled.section<{ altura: boolean }>`
    ${({ theme, altura }) => css`
        height: ${altura ? '100vh' : '100%'};
        width: 100%;
        border-bottom: 1rem solid ${theme.gray};
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;