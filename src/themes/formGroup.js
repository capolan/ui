import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.FormGroup': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.blocked': {
      '.inline': {
        'lh.ui.Label': {
          flex: 1,
          paddingBottom: 0,
        },

        'lh.ui.Text': {
          flex: 1,
          textAlign: 'right',
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
          textAlignVertical: 'top',
        },
      },

      'lh.ui.Label': {
        borderWidth: 0,
        paddingBottom: variables.smallGutter,
      },

      'lh.ui.Text': {
        color: variables.paperColor,
        paddingHorizontal: variables.mediumGutter,
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

    '.muted': {
      opacity: variables.mutedOpacity,
    },

    'lh.ui.Label': {
      paddingBottom: variables.smallGutter,
      paddingHorizontal: variables.mediumGutter,
    },
  },
});
