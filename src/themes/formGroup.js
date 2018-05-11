import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.FormGroup': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.blocked': {
      borderWidth: 1,
      borderColor: variables.greys['100'],
      paddingVertical: variables.mediumGutter,
      backgroundColor: variables.paperColor,

      'lh.ui.Label': {
        paddingBottom: variables.smallGutter,
      },

      'lh.ui.TextInput': {
        backgroundColor: 'transparent',
      },
    },

    '.inline': {
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      paddingVertical: 0,

      'lh.ui.Label': {
        flex: 1,
        paddingBottom: 0,
      },

      'lh.ui.TextInput': {
        flex: 1,
        textAlign: 'right',
      },

      'lh.ui.Switch': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },

      'lh.ui.Checkbox': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },

      'lh.ui.Radio': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },
    },

    '.multiline': {
      'lh.ui.TextInput': {
        minHeight: 100,
      },
    },

    'lh.ui.Label': {
      paddingBottom: variables.smallGutter,
      paddingHorizontal: variables.mediumGutter,
    },
  },
};
