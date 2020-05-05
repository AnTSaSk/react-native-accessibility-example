import React, { FunctionComponent } from 'react';
import { SafeAreaView, View } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

// Context
import { useTheme } from '../hooks/Theme';
import { useAccessibility } from '../hooks/Accessibility';

// Styles
import {
  DrawerHeader,
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

  const SizeSection: FunctionComponent<{}> = () => (
    <View>
      <ThemeTitle isDark={isDark}>Change size :</ThemeTitle>
    </View>
  );

  const ThemeSection: FunctionComponent<{}> = () => (
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
      <DrawerHeader>
        <SizeSection />
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </DrawerHeader>
      <SafeAreaView>
        <DrawerFooter>
          <ThemeSection />
        </DrawerFooter>
      </SafeAreaView>
    </>
  );
};

export default Drawer;
