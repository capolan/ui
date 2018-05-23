import { INCLUDE, createSharedStyle } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Timestamp': {
    [INCLUDE]: ['guttersMargin'],

    ...createSharedStyle(['lh.ui.Text']),
  }
});
