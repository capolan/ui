import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Screen': {
    [INCLUDE]: ['commonVariants', 'guttersPadding'],

    flexGrow: 1,
    backgroundColor: variables.backgroundColor,
  },
};
