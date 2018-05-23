import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Screen': {
    [INCLUDE]: ['verticalFlexAlignment'],

    '.transparent': {
      backgroundColor: 'transparent',
    },

    flex: 1,
    backgroundColor: 'transparent',
  },
});
