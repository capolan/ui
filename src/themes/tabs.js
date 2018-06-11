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
    scroll: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    },

    tab: {
      position: 'relative',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: variables.mediumGutter,
    },

    indicator: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 3,
      backgroundColor: variables.darkColor,
    },

    flexDirection: 'row',
    height: 50,
    overflow: 'hidden',
    backgroundColor: variables.paperColor,
  },
});
