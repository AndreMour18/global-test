import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    background: string;
    text: string;
    textSecondary: string;
    divider: string;
    accent: string;
    error: string;
  }
}
