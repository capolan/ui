import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Icon': {
    [INCLUDE]: ['guttersMargin'],

    color: variables.paperColor,
  },
});
