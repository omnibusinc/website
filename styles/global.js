import { createGlobalStyle } from 'styled-components';
import {fontFaces} from './fonts';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  ${fontFaces}

`;

export default GlobalStyles;