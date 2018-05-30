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

      borderWidth: 0,
      backgroundColor: variables.darkColor,
    },

    '.paper': {
      'lh.ui.Text': {
        color: variables.darkColor,
      },

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
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      color: variables.paperColor,
    },

    'lh.ui.Icon': {
      marginRight: variables.mediumGutter,
    },

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.hairlineWidth,
    borderColor: inverseColorBrightnessForAmount(variables.featuredColor, 10),
    backgroundColor: variables.featuredColor,
  },
});
