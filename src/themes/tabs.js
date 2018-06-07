import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Tabs': {
    '.dark': {
      'lh.ui.TabBar': {
        label: {
          color: variables.paperColor,
        },

        indicator: {
          height: 3,
          zIndex: 20,
          backgroundColor: variables.paperColor,
        },

        backgroundColor: variables.darkColor,
      },
    },

    initialLayout: {
      width: variables.screenWidth,
      height: 0,
    },
  },

  'lh.ui.TabBar': {
    tab: {
      // justifyContent: 'center',
      height: 47,
    },

    label: {
      color: variables.darkColor,
    },

    indicator: {
      height: 3,
      zIndex: 20,
      backgroundColor: variables.darkColor,
    },

    height: 50,
    elevation: 0,
    shadowOffset: { height: 0 }, 
    backgroundColor: variables.paperColor,
  },
});
