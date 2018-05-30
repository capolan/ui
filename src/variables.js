import { StyleSheet } from 'react-native';
import { INCLUDE, changeColorAlpha } from '@shoutem/theme';

export const sizeVariants = [
  '', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical',
];

const baseVariables = {
  fontFamily: '',
  featuredColor: '#9381ff',
  backgroundColor: '#FEFFFC',
  paperColor: '#fff',
  darkColor: '#243447',
  textColor: '#243447',
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  overlayColor: 'rgba(255, 255, 255, 0.8)',
  lineColor: '#ced1cc',

  successColor: '#20bf6b',
  dangerColor: '#eb3b5a',
  warningColor: '#f7b731',
  infoColor: '#3867d6',

  extraSmallGutter: 4,
  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
};

export const defaultVariables = {
  ...baseVariables,

  hairlineWidth: StyleSheet.hairlineWidth,

  // Typography
  typography: {
    heading: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 25,
      color: baseVariables.textColor,
    },
    title: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
      color: baseVariables.textColor,
    },
    subtitle: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 15,
      color: baseVariables.textColor,
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
      color: baseVariables.textColor,
    },
  },
};
