import { StyleSheet } from 'react-native';
import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Modal': {
    'lh.ui.View': {
      'lh.ui.DatePicker': {
        width: '100%',
      },
    },

    backdrop: {
      ...StyleSheet.absoluteFillObject,
    },

    flex: 1,
    backgroundColor: variables.overlayColor,
  },
});
