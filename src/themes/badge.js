import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Badge': {
    [INCLUDE]: ['selfFlexAlignment', 'guttersMargin'],

    'lh.ui.Text': {
      fontSize: 12,
      color: variables.paperColor,
    },

    '.dark': {
      'lh.ui.Text': {
        color: variables.paperColor,
      },
      count: {
        backgroundColor: variables.darkColor,
      },
    },

    '.success': {
      count: {
        backgroundColor: variables.successColor,
      },
    },

    '.danger': {
      count: {
        backgroundColor: variables.dangerColor,
      },
    },

    '.warning': {
      count: {
        backgroundColor: variables.warningColor,
      },
    },

    '.info': {
      count: {
        backgroundColor: variables.infoColor,
      },
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
      backgroundColor: variables.featuredColor,
    },

    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
