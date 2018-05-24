import {
  INCLUDE,
  inverseColorBrightnessForAmount,
  changeColorAlpha,
} from '@shoutem/theme';

export const sizeVariants = [
  '', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical',
];

const baseVariables = {
  fontFamily: '',
  featuredColor: '#8854D0',
  backgroundColor: '#f2f2f2',
  paperColor: '#fff',
  darkColor: '#243447',
  textColor: '#243447',
  shadowColor: 'rgba(0, 0, 0, 0.3)',

  successColor: '#20BF6B',
  dangerColor: '#EB3B5A',
  warningColor: '#F7B731',
  infoColor: '#3867D6',

  extraSmallGutter: 4,
  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
};

export const defaultVariables = {
  ...baseVariables,

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

  // FormGrouo
  formGroup: {
    borderWidth: 1,
    borderColor: '#f4f6f8',
    backgroundColor: baseVariables.paperColor,
  },

  // TextInput
  textInput: {
    text: {
      color: baseVariables.textColor,
    },

    selectionColor: baseVariables.textColor,
    borderWidth: 1,
    borderColor: '#f4f6f8',
    backgroundColor: baseVariables.paperColor,
    placeholderTextColor: changeColorAlpha(baseVariables.textColor, 0.5),
  },

  // Label
  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: baseVariables.textColor,
  },

  // Badge
  badge: {
    text: {
      fontSize: 12,
      color: baseVariables.paperColor,
    },
    backgroundColor: baseVariables.featuredColor,
  },

  // Button
  button: {
    text: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      color: baseVariables.paperColor,
    },

    borderWidth: 1,
    borderColor: baseVariables.featuredColor,
    backgroundColor: baseVariables.featuredColor,
  },

  // Switch
  switch: {
    activeBackgroundColor: baseVariables.featuredColor,
    inativeBackgroundColor: inverseColorBrightnessForAmount(baseVariables.paperColor, 15),
  },

  // Checkbox
  checkbox: {
    activeBackgroundColor: baseVariables.featuredColor,
    inativeBackgroundColor: inverseColorBrightnessForAmount(baseVariables.paperColor, 15),
  },

  // Radio
  radio: {
    activeBackgroundColor: baseVariables.featuredColor,
    inativeBackgroundColor: inverseColorBrightnessForAmount(baseVariables.paperColor, 15),
  },

  // Navigation
  navigation: {
    icons: {
      color: baseVariables.textColor,
    },

    height: 60,
    backgroundColor: baseVariables.paperColor,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
};
