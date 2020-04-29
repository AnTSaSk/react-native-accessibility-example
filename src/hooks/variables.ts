export const colors = {
  darkRed: '#AF2F25',
  red: '#F53A2D',
  lightRed: '#FA5C52',

  darkBlue: '#3F51B5',
  blue: '#2196F3',
  lightBlue: '#03A9F4',

  grey: '#A9A9A9',
  darkGrey: '#333333',

  black: '#000000',
  white: '#FFFFFF',
};

export const contrastedColors = {
  darkRed: '#A31207',
  red: '#F31A0B',
  lightRed: '#FC5145',

  darkBlue: '#3F51B5',
  blue: '#2196F3',
  lightBlue: '#03A9F4',

  grey: '#4C4C4C',

  black: '#000000',
  white: '#FFFFFF',
};

export const lightColors = {
  ...colors,

  primary: colors.blue,
  secondary: colors.lightBlue,

  background: colors.white,
  card: colors.white,
  text: colors.grey,
  border: colors.grey,
};

export const darkColors = {
  ...colors,

  primary: colors.darkBlue,
  secondary: colors.blue,

  background: colors.black,
  card: colors.darkGrey,
  text: colors.white,
  border: colors.white,
};
