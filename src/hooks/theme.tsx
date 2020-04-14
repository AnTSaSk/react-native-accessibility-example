import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const appDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    black: '#000000',
    lightBlack: '#616161',
    grey: '#9E9E9E',
    altGrey: '#E0E0E0',
    lightGrey: '#EEEEEE',
    white: '#FFFFFF',
    deepBlue: '#2A2660',
    darkBlue: '#312C83',
    green: '#00DE97',

    primary: '#2A2660',
    secondary: '#312C83',

    title: '#616161',
    text: '#9E9E9E',
  },
};

export const appContrastTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,

    black: '#000000',
    lightBlack: '#616161',
    grey: '#9E9E9E',
    altGrey: '#E0E0E0',
    lightGrey: '#EEEEEE',
    white: '#FFFFFF',
    deepBlue: '#2A2660',
    darkBlue: '#312C83',
    green: '#00DE97',

    primary: '#312C83',
    secondary: '#00DE97',

    title: '#FFFFFF',
    text: '#E0E0E0',
  },
};
