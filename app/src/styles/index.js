import { createGlobalStyle } from "styled-components";

export const theme = {
  bg: 'linear-gradient(to right, #092C41, #04AFD7);',
  fontColor: `#FECB00`,
  tbg: `rgba(255, 255, 255, 0.3)`,
  borders: `1px solid rgba(255, 255, 255, 0.3)`,
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    background: ${ theme.bg };
    background: ${ theme.bg };
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
  }
`;