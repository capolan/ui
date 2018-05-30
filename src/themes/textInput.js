import { INCLUDE, changeColorAlpha } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.TextInput': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    'lh.ui.Text': {
      color: variables.textColor,
    },

    minHeight: 52,
    paddingVertical: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.hairlineWidth,
    borderColor: variables.lineColor,
    selectionColor: variables.textColor,
    placeholderTextColor: changeColorAlpha(variables.textColor, 0.5),
    backgroundColor: variables.paperColor,
    underlineColorAndroid: 'transparent',
  },
});
