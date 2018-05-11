import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.TextInput': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    minHeight: 52,
    paddingVertical: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
    selectionColor: variables.selectionColor,
    placeholderTextColor: variables.placeholderTextColor,
    backgroundColor: variables.paperColor,
    underlineColorAndroid: 'transparent',
  },
};
