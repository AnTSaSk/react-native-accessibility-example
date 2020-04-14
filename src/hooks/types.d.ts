export type accessibilitySize = 'default' | 'large';
export type accessibilityTheme = 'default' | 'contrast';

export interface accessibilityContextProps {
  size: accessibilitySize;
  theme: accessibilityTheme;
  changeSize: (value: accessibilitySize) => void;
  changeTheme: (value: accessibilityTheme) => void;
}
