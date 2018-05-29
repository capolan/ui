import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Card': {
    [INCLUDE]: ['commonVariants', 'guttersMargin', 'baseShadow'],

    flexDirection: 'column',
    backgroundColor: variables.paperColor,
  },
});
