import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Context
import { useAccessibility } from './hooks/accessibility';
import { appDefaultTheme, appContrastTheme } from './hooks/theme';

// Drawer
import CustomDrawer from './navigation/Drawer';

// Screens
import Home from './routes/Home';

const Drawer = createDrawerNavigator();

const Navigation: FunctionComponent = () => {
  const { theme } = useAccessibility();

  const statusBarStyle = theme === 'default' ? 'dark-content' : 'light-content';
  const themeColors = theme === 'default' ? appDefaultTheme : appContrastTheme;

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer theme={themeColors}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawer {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
