import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  // Heding
  'lh.ui.Heding': {
    [INCLUDE]: ['text'],

    ...variables.typography.heading,
  },

  // Title
  'lh.ui.Title': {
    [INCLUDE]: ['text'],

    ...variables.typography.title,
  },

  // Subtitle
  'lh.ui.Subtitle': {
    [INCLUDE]: ['text'],

    ...variables.typography.subtitle,
  },

  // Caption
  'lh.ui.Caption': {
    [INCLUDE]: ['text'],

    ...variables.typography.caption,
  },

  // Text
  'lh.ui.Text': {
    [INCLUDE]: ['text'],

    ...variables.typography.text,
  },

  // Label
  'lh.ui.Label': {
    [INCLUDE]: ['text'],

    ...variables.label,
  },
};
