import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Badge': {
    [INCLUDE]: ['selfFlexAlignment', 'guttersMargin'],

    'lh.ui.Text': {
      ...variables.badge.text,
    },

    count: {
      position: 'absolute',
      top: -10,
      right: -15,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: variables.smallGutter,
      overflow: 'hidden',
      backgroundColor: variables.badge.backgroundColor,
    },

    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
