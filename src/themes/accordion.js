import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Accordion': {
    [INCLUDE]: ['guttersMargin'],

    content: {},

    overflow: 'hidden',
  }
});
