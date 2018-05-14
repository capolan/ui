import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.TextInput': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    minHeight: 52,
    paddingVertical: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
    borderWidth: variables.textInput.borderWidth,
    borderColor: variables.textInput.borderColor,
    selectionColor: variables.textInput.selectionColor,
    placeholderTextColor: variables.textInput.placeholderTextColor,
    backgroundColor: variables.textInput.backgroundColor,
    underlineColorAndroid: 'transparent',

    'lh.ui.Text': {
      ...variables.textInput.text,
    },
  },
};
