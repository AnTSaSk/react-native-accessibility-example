import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Context
import { useTheme } from './hooks/Theme';
import { lightColors, darkColors } from './variables';

// Drawer
import CustomDrawer from './navigation/Drawer';

// Screens
import Home from './routes/Home';

const Drawer = createDrawerNavigator();

const Navigation: FunctionComponent = () => {
  const { theme } = useTheme();

  const statusBarStyle = theme === 'light' ? 'dark-content' : 'light-content';
  const themeColors = {
    ...DefaultTheme,
    dark: theme === 'dark',
    colors: theme === 'light' ? lightColors : darkColors,
  };

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
