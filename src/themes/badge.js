import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Badge': {
    [INCLUDE]: ['selfFlexAlignment', 'guttersMargin'],

    'lh.ui.Text': {
      ...variables.badge.text,
    },

    '.dark': {
      'lh.ui.Text': {
        color: variables.paperColor,
      },
      backgroundColor: variables.darkColor,
    },

    '.success': {
      backgroundColor: variables.successColor,
    },

    '.danger': {
      backgroundColor: variables.dangerColor,
    },

    '.warning': {
      backgroundColor: variables.warningColor,
    },

    '.info': {
      backgroundColor: variables.infoColor,
    },

    count: {
      position: 'absolute',
      top: -10,
      right: -15,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: variables.smallGutter,
      overflow: 'hidden',
      backgroundColor: variables.badge.backgroundColor,
    },

    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
