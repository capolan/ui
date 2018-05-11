import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Screen': {
    [INCLUDE]: ['commonVariants', 'guttersPadding'],

    keyboardAvoidingView: {
      flex: 1,
    },

    flexGrow: 1,
  },
};
