import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');



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
}

a, button {
font-family: 'Poppins', sans-serif;
}

`;
