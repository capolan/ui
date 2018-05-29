import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.DatePicker': {
    [INCLUDE]: ['guttersMargin'],

    'lh.ui.Card': {
      'lh.ui.View': {
        'lh.ui.Button': {
          '.clear': {
            'lh.ui.Text': {
              fontWeight: '300',
              color: variables.darkColor,
            },
          },
        },
      },
    },

    calendar: {
      selectedDateColor: variables.featuredColor,
    },

    height: 370,
  },
});
