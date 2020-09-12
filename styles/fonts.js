import { css } from 'styled-components';
import Donovan from '../assets/fonts/donovan.woff';

export const fontFaces = css`
  @font-face {
    font-family: "Donovan";
    src: url(${Donovan});
    font-weight: 300;
    font-style: normal;
  }
`;