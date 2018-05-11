import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  // Title
  'lh.ui.Title': {
    [INCLUDE]: ['text'],

    ...variables.title,
  },

  // Text
  'lh.ui.Text': {
    [INCLUDE]: ['text'],

    ...variables.text,
  },

  // Label
  'lh.ui.Label': {
    [INCLUDE]: ['text'],

    ...variables.label,
  },
};
