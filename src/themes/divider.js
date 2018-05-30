import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Divider': {
    '.line': {
      paddingVertical: variables.mediumGutter,
      borderBottomWidth: variables.hairlineWidth,
      borderColor: variables.lineColor,
    },

    '.section-header': {
      'lh.ui.Caption': {
        marginTop: -1,
        marginBottom: variables.smallGutter,
      },

      '.clear': {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
      },

      borderTopWidth: variables.hairlineWidth,
      borderBottomWidth: variables.hairlineWidth,
      borderColor: variables.lineColor,
      backgroundColor: variables.paperColor,
    },

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: variables.mediumGutter,
    paddingHorizontal: variables.mediumGutter,
  },
});
