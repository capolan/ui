import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default (variables) => ({
  'lh.ui.Icon': {
    [INCLUDE]: ['guttersMargin'],

    color: variables.paperColor,
  },
});
