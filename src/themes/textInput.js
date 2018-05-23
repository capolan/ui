import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.TextInput': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    'lh.ui.Text': {
      ...variables.textInput.text,
    },

    minHeight: 52,
    paddingVertical: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.textInput.borderWidth,
    borderColor: variables.textInput.borderColor,
    selectionColor: variables.textInput.selectionColor,
    placeholderTextColor: variables.textInput.placeholderTextColor,
    backgroundColor: variables.textInput.backgroundColor,
    underlineColorAndroid: 'transparent',
  },
});
