import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Button': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

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
      paddingVertical: variables.mediumGutter,
      ...variables.button.text,
    },

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: variables.button.borderWidth,
    borderColor: variables.button.borderColor,
    backgroundColor: variables.button.backgroundColor,
    underlayColor: variables.button.underlayColor,
  },
};
