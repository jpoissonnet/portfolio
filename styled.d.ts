import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkest: string;
    darker: string;
    dark: string;
    light: string;
    lighter: string;
    lightest: string;
    primary: string;
    secondary: string;
  }
}
