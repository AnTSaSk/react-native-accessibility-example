import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// Context
import { useAccessibility } from '../hooks/accessibility';
import { appDefaultTheme, appContrastTheme } from '../hooks/theme';

const Drawer = (props) => {
  const { theme, changeTheme } = useAccessibility();
  const themeColors = theme === 'default' ? appDefaultTheme : appContrastTheme;

  const themeSection = () => (
    <View style={styles.theme}>
      <Text style={[styles.title, { color: themeColors.colors.title }]}>
        Theme :
      </Text>
      <View style={styles.themeWrapper}>
        <TouchableOpacity
          style={styles.themeTouchable}
          onPress={() => changeTheme('default')}
        >
          <View style={[styles.themeIcon, styles.themeIconNormal]} />
          <Text style={{ color: themeColors.colors.text }}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.themeTouchable}
          onPress={() => changeTheme('contrast')}
        >
          <View style={[styles.themeIcon, styles.themeIconContrast]} />
          <Text style={{ color: themeColors.colors.text }}>High Contrast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <SafeAreaView>
        <View style={styles.footer}>{themeSection()}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  // Theme section
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  themeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  themeTouchable: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  themeIcon: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 100,
  },
  themeIconNormal: {
    backgroundColor: '#ffffff',
  },
  themeIconContrast: {
    backgroundColor: '#000000',
  },
});

export default Drawer;
