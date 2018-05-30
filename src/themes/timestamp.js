import { INCLUDE, createSharedStyle } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Timestamp': {
    [INCLUDE]: ['text'],

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: variables.textColor,
  }
});
