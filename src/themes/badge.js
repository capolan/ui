import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

console.log(variables.badge);

export default {
  'lh.ui.Badge': {
    [INCLUDE]: ['guttersMargin'],

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

    // flexDirection: 'column',
    position: 'relative',
    alignSelf: 'flex-start',
  }
};
