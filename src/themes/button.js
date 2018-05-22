import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Button': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.clear': {
      backgroundColor: 'transparent',
      borderWidth: 0,

      '.shadow': {
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
        elevation: 0,
      },

      'lh.ui.Text': {
        color: variables.darkColor,
      }
    },

    '.shadow': {
      shadowColor: variables.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 1,
    },

    '.full-width': {
      flex: 1,
      alignSelf: 'stretch',
      height: 52,
    },

    '.muted': {
      'lh.ui.Icon': {
        opacity: 0.5,
      },

      'lh.ui.Text': {
        opacity: 0.5,
      },
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
    alignSelf: 'flex-start',
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.button.borderWidth,
    borderColor: variables.button.borderColor,
    backgroundColor: variables.button.backgroundColor,
    underlayColor: variables.button.underlayColor,
  },
};
