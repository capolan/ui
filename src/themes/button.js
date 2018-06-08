import { INCLUDE, changeColorAlpha, inverseColorBrightnessForAmount } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Button': {
    [INCLUDE]: [
      'commonVariants',
      'guttersMargin',
      'selfFlexAlignment',
      'horizontalFlexAlignment',
    ],

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

      'lh.ui.Icon': {
        color: variables.paperColor,
      },

      borderWidth: 0,
      backgroundColor: variables.darkColor,
    },

    '.paper': {
      'lh.ui.Text': {
        color: variables.darkColor,
      },

      'lh.ui.Icon': {
        color: variables.darkColor,
      },

      borderWidth: 0,
      backgroundColor: variables.paperColor,
    },

    '.success': {
      borderColor: inverseColorBrightnessForAmount(variables.successColor, 10),
      backgroundColor: variables.successColor,
    },

    '.danger': {
      borderColor: inverseColorBrightnessForAmount(variables.dangerColor, 10),
      backgroundColor: variables.dangerColor,
    },

    '.warning': {
      borderColor: inverseColorBrightnessForAmount(variables.warningColor, 10),
      backgroundColor: variables.warningColor,
    },

    '.info': {
      borderColor: inverseColorBrightnessForAmount(variables.infoColor, 10),
      backgroundColor: variables.infoColor,
    },

    '.shadow': {
      [INCLUDE]: ['baseShadow'],
    },

    '.muted': {
      opacity: variables.mutedOpacity,
    },

    '.full-width': {
      alignSelf: 'stretch',
    },

    'lh.ui.Text': {
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: 'bold',
      letterSpacing: 1,
      marginVertical: variables.mediumGutter,
      marginHorizontal: variables.smallGutter,
      color: variables.paperColor,
    },

    'lh.ui.Icon': {
      marginHorizontal: variables.smallGutter,
    },

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: variables.smallGutter,
    borderWidth: variables.hairlineWidth,
    borderColor: inverseColorBrightnessForAmount(variables.featuredColor, 10),
    backgroundColor: variables.featuredColor,
  },
});
