import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Appearance } from 'react-native-appearance';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import { lightColors, darkColors } from './variables';

// Types
import { themeValue, themeContextProps, themeStyleProps } from './types.d';

export const ThemeContext = createContext<themeContextProps>({
  loading: true,
  theme: 'light',
  changeLoading: () => {},
  changeTheme: () => {},
});

export const ThemeProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<themeValue>('light');
  const [themeStyle, setThemeStyle] = useState<themeStyleProps>({
    colors: lightColors,
  });

  const changeLoading = (value: boolean) => {
    setLoading(value);
  };

  const changeTheme = (value: themeValue) => {
    setTheme(value);

    if (value === 'light') {
      setThemeStyle({
        colors: lightColors,
      });
    } else {
      setThemeStyle({
        colors: darkColors,
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        loading,
        theme,
        changeLoading,
        changeTheme,
      }}
    >
      <EmotionThemeProvider theme={themeStyle}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { loading, theme, changeLoading, changeTheme } = useContext(
    ThemeContext,
  );

  useEffect(() => {
    if (loading) {
      const colorScheme = Appearance.getColorScheme();

      if (colorScheme !== 'no-preference') {
        changeTheme(colorScheme);
      }

      changeLoading(false);
    }
  }, [loading, changeLoading, changeTheme]);

  return {
    theme,
    changeTheme,
  };
};
