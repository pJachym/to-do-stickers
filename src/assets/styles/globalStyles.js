import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*, *::after,*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    letter-spacing: 0.7px;
}

a, button {
font-family: 'Montserrat', sans-serif;
}

`;
