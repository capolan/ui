// import {
//   Dimensions,
//   StyleSheet,
//   Platform,
//   StatusBar,
// } from 'react-native';
import { inverseColorBrightnessForAmount, changeColorAlpha } from '@shoutem/theme';

export const sizeVariants = ['', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical'];

export const primaryColors = {
  red: '#EB3B5A',
  orange: '#FA8231',
  yellow: '#F7B731',
  green: '#20BF6B',
  lightGreen: '#0FB9B1',
  blue: '#3867D6',
  lightBlue: '#2D98DA',
  purple: '#8854D0',

  greys: {
    100: '#F4F6F8',
    200: '#D1D8E0',
    300: '#A5B1C2',
    400: '#778CA3',
    500: '#4B6584',
    600: '#364D68',
    700: '#243447',
    800: '#000',
  },
};

export const defaultVariables = {
  ...primaryColors,

  featuredColor: primaryColors.lightBlue,
  backgroundColor: '#f2f2f2',
  paperColor: '#fff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',

  selectionColor: primaryColors.greys['700'],
  placeholderTextColor: changeColorAlpha(primaryColors.greys['700'], 0.5),

  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    color: primaryColors.greys['700'],
  },

  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: primaryColors.greys['700'],
  },

  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: primaryColors.greys['600'],
  },

  button: {
    text: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
    },

    backgroundColor: primaryColors.lightBlue,
    underlayColor: changeColorAlpha(primaryColors.lightBlue, 0.5),
  },

  switch: {
    activeBackgroundColor: primaryColors.lightBlue,
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  checkbox: {
    activeBackgroundColor: primaryColors.lightBlue,
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  extraSmallGutter: 4,
  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
};
