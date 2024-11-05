import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

     html, body {
    overflow-x: hidden; /* Evita el desbordamiento horizontal */
    margin: 0;
    padding: 0;
  }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #f8f8f8;
        color: #060215;
        line-height:1.6;
    }

    h1, h2, h3, h4, h5, h6 {
    color: #060215;
    font-weight: 600;
  }

  a {
    color: #6882B4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
