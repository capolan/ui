import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Icon': {
    [INCLUDE]: ['guttersMargin'],

    '.dark': {
      color: variables.darkColor,
    },

    '.success': {
      color: variables.successColor,
    },

    '.danger': {
      color: variables.dangerColor,
    },

    '.warning': {
      color: variables.warningColor,
    },

    '.info': {
      color: variables.infoColor,
    },

    color: variables.paperColor,
  },
});
