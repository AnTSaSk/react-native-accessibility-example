import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

// Context
import { useTheme } from '../hooks/theme';
import { useAccessibility } from '../hooks/accessibility';

// Styles
import {
  DrawerFooter,
  ThemeTitle,
  ThemeWrapper,
  ThemeTouchable,
  ThemeParagraph,
  ThemeIconLight,
  ThemeIconDark,
  ThemeIconContrast,
} from './style';

const Drawer: FunctionComponent<DrawerContentComponentProps> = (props) => {
  const { theme, changeTheme } = useTheme();
  const { contrast, changeContrast } = useAccessibility();
  const isDark = theme === 'dark';

  const themeSection = () => (
    <View>
      <ThemeTitle isDark={isDark}>Theme :</ThemeTitle>
      <ThemeWrapper>
        <ThemeTouchable onPress={() => changeTheme('light')}>
          <ThemeIconLight />
          <ThemeParagraph isDark={isDark}>Light</ThemeParagraph>
        </ThemeTouchable>
        <ThemeTouchable onPress={() => changeTheme('dark')}>
          <ThemeIconDark />
          <ThemeParagraph isDark={isDark}>Dark</ThemeParagraph>
        </ThemeTouchable>
        <ThemeTouchable onPress={() => changeContrast(!contrast)}>
          <ThemeIconContrast />
          <ThemeParagraph isDark={isDark}>Contrast</ThemeParagraph>
        </ThemeTouchable>
      </ThemeWrapper>
    </View>
  );

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <SafeAreaView>
        <DrawerFooter>{themeSection()}</DrawerFooter>
      </SafeAreaView>
    </>
  );
};

export default Drawer;
