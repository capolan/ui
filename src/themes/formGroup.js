import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.FormGroup': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.blocked': {
      'lh.ui.Label': {
        borderWidth: 0,
        paddingBottom: variables.smallGutter,
      },

      'lh.ui.TextInput': {
        borderWidth: 0,
        backgroundColor: 'transparent',
      },

      borderWidth: variables.hairlineWidth,
      borderColor: variables.lineColor,
      paddingVertical: variables.mediumGutter,
      backgroundColor: variables.paperColor,
    },

    '.inline': {
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

      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      paddingVertical: 0,
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
});
