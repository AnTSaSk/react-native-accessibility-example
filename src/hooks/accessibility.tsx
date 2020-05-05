import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { accessibilitySize, accessibilityContextProps } from './types';

export const AccessibilityContext = createContext<accessibilityContextProps>({
  size: 'default',
  contrast: false,
  changeSize: () => {},
  changeContrast: () => {},
});

export const AccessibilityProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [size, setSize] = useState<accessibilitySize>('default');
  const [contrast, setContrast] = useState<boolean>(false);

  const changeSize = (value: accessibilitySize) => {
    setSize(value);
  };

  const changeContrast = (value: boolean) => {
    setContrast(value);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        size,
        contrast,
        changeSize,
        changeContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const { size, contrast, changeSize, changeContrast } = useContext(
    AccessibilityContext,
  );

  return {
    size,
    contrast,
    changeSize,
    changeContrast,
  };
};
