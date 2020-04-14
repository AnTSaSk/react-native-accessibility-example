import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from 'react';

import {
  accessibilitySize,
  accessibilityTheme,
  accessibilityContextProps,
} from './types.d';

export const AccessibilityContext = createContext<accessibilityContextProps>({
  size: 'default',
  theme: 'default',
  changeSize: () => {},
  changeTheme: () => {},
});

export const AccessibilityProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [size, setSize] = useState<accessibilitySize>('default');
  const [theme, setTheme] = useState<accessibilityTheme>('default');

  const changeSize = (value: accessibilitySize) => {
    setSize(value);
  };

  const changeTheme = (value: accessibilityTheme) => {
    setTheme(value);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        size,
        theme,
        changeSize,
        changeTheme,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const { size, theme, changeSize, changeTheme } = useContext(
    AccessibilityContext,
  );

  return {
    size,
    theme,
    changeSize,
    changeTheme,
  };
};
