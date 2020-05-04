export type accessibilitySize = 'default' | 'large';
export type themeValue = 'light' | 'dark';

export interface themeStyleProps {
  colors: {
    darkRed?: string;
    red?: string;
    lightRed?: string;
    darkBlue?: string;
    blue?: string;
    lightBlue?: string;
    grey?: string;
    darkGrey?: string;
    black?: string;
    white?: string;
    primary?: string;
    secondary?: string;
    background?: string;
    card?: string;
    text?: string;
    border?: string;
  };
  fonts?: object;
}

export interface accessibilityContextProps {
  size: accessibilitySize;
  contrast: boolean;
  changeSize: (value: accessibilitySize) => void;
  changeContrast: (value: boolean) => void;
}

export interface themeContextProps {
  loading: boolean;
  theme: themeValue;
  changeLoading: (value: boolean) => void;
  changeTheme: (value: themeValue) => void;
}
