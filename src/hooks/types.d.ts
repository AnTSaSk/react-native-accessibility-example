export type accessibilitySize = 'default' | 'large';
export type themeValue = 'light' | 'dark';

export interface themeStyleProps {
  colors: object;
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
