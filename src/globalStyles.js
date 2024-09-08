import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
    color: black;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Archivo Black", sans-serif;
    /* Remove the font-weight property to use Archivo Black's default weight */
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  button, input, select, textarea {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;