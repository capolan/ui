import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Screen': {
    [INCLUDE]: ['verticalFlexAlignment'],

    '.transparent': {
      backgroundColor: 'transparent',
    },

    flex: 1,
    backgroundColor: 'transparent',
  },
};
