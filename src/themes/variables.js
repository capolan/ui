// import {
//   Dimensions,
//   StyleSheet,
//   Platform,
//   StatusBar,
// } from 'react-native';
import { inverseColorBrightnessForAmount, changeColorAlpha } from '@shoutem/theme';

export const sizeVariants = [
  '', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical',
];

export const defaultVariables = {
  fontFamily: '',
  featuredColor: '#8854D0',
  backgroundColor: '#f2f2f2',
  paperColor: '#fff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',

  successColor: '#20BF6B',
  dangerColor: '#EB3B5A',
  warningColor: '#F7B731',
  infoColor: '#3867D6',

  // Typography
  typography: {
    heading: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 25,
      color: '#243447',
    },
    title: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
      color: '#243447',
    },
    subtitle: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 15,
      color: '#243447',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      color: '#4b6584',
    },
    text: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 15,
      color: '#243447',
    },
  },

  // FormGrouo
  formGroup: {
    borderWidth: 1,
    borderColor: '#f4f6f8',
    backgroundColor: '#fff',
  },

  // TextInput
  textInput: {
    text: {
      color: '#243447',
    },

    selectionColor: '#243447',
    borderWidth: 1,
    borderColor: '#f4f6f8',
    backgroundColor: '#fff',
    placeholderTextColor: changeColorAlpha('#243447', 0.5),
  },

  // Label
  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#243447',
  },

  // Button
  button: {
    text: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
    },

    borderWidth: 1,
    borderColor: '#8854D0',
    backgroundColor: '#8854D0',
    underlayColor: changeColorAlpha('#8854D0', 0.5),
  },

  // Switch
  switch: {
    activeBackgroundColor: '#8854D0',
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  // Checkbox
  checkbox: {
    activeBackgroundColor: '#8854D0',
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  // Radio
  radio: {
    activeBackgroundColor: '#8854D0',
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  // Navigation
  navigation: {
    title: {},
    icons: {},

    backgroundColor: {},
    borderBottomColor: {},
    borderBottomWidth: {},
  },

  extraSmallGutter: 4,
  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
};
