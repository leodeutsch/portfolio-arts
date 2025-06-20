import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textLight: string;
      border: string;
      overlay: string;
    };
    fonts: {
      primary: string;
      heading: string;
    };
    sizes: {
      maxWidth: string;
      headerHeight: string;
    };
    transitions: {
      default: string;
      slow: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
