import { INCLUDE, changeColorAlpha } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Button': {
    [INCLUDE]: ['commonVariants', 'selfFlexAlignment', 'guttersMargin'],

    '.clear': {
      '.shadow': {
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
        elevation: 0,
      },

      'lh.ui.Text': {
        color: variables.darkColor,
      },

      backgroundColor: 'transparent',
      borderWidth: 0,
    },

    '.dark': {
      'lh.ui.Text': {
        color: variables.paperColor,
      },

      backgroundColor: variables.darkColor,
    },

    '.paper': {
      'lh.ui.Text': {
        color: variables.darkColor,
      },

      backgroundColor: variables.paperColor,
    },

    '.shadow': {
      shadowColor: variables.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 1,
    },

    '.muted': {
      'lh.ui.Icon': {
        opacity: 0.5,
      },

      'lh.ui.Text': {
        opacity: 0.5,
      },
    },

    '.full-width': {
      alignSelf: 'stretch',
    },

    'lh.ui.Text': {
      letterSpacing: 1,
      marginVertical: variables.mediumGutter,
      ...variables.button.text,
    },

    'lh.ui.Icon': {
      marginRight: variables.mediumGutter,
    },

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.button.borderWidth,
    borderColor: variables.button.borderColor,
    backgroundColor: variables.button.backgroundColor,
  },
});
