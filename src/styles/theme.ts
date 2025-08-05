import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#FF8C42",
    secondary: "#1A1A1A",
    background: "#FFFFFF",
    text: "#333333",
    textLight: "#666666",
    border: "#E5E5E5",
    overlay: "rgba(0, 0, 0, 0.5)",
  },
  fonts: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  sizes: {
    maxWidth: "1200px",
    headerHeight: "80px",
  },
  transitions: {
    default: "0.3s ease",
    slow: "0.6s ease",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.15)",
    large: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
};
