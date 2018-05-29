import { Dimensions } from 'react-native';
import { INCLUDE } from '@shoutem/theme';

const { height: screenHeight } = Dimensions.get('window');

export default (variables) => ({
  'lh.ui.DatePicker': {
    [INCLUDE]: ['guttersMargin', 'baseShadow'],

    calendar: {
      selectedDateColor: variables.featuredColor,
    },

    height: 370,
    backgroundColor: variables.paperColor,
  },
});
