import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily || "sans-serif"};
    transition: background 0.3s, color 0.3s;
  }

  input, button {
    font-family: inherit;
  }
`;
