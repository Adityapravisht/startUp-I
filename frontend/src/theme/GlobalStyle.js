// src/theme/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --bg-light:    ${({ theme }) => theme.bgLight};
    --text-primary: ${({ theme }) => theme.textPrimary};
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.bgLight};
    color: ${({ theme }) => theme.textPrimary};
    transition: background-color 0.2s, color 0.2s;
  }
`;
