import { INCLUDE, createSharedStyle } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Timestamp': {
    [INCLUDE]: ['guttersMargin'],

    ...createSharedStyle(['lh.ui.Text']),
  }
};
