import { createGlobalStyle } from 'styled-components';

import { Reset } from './reset';

export const GlobalStyle = createGlobalStyle`

${Reset}

body {
  height: 100%;
  justify-content: center;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #363636;
  letter-spacing: 0.1px;
}
`;
