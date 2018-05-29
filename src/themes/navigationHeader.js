import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.NavigationHeader': {
    '.featured': {
      container: {
        backgroundColor: variables.featuredColor,
      }
    },

    '.dark': {
      container: {
        borderBottomColor: 'transparent',
        backgroundColor: variables.darkColor,
      },

      'lh.ui.Title': {
        color: variables.paperColor,
      },

      'lh.ui.Button': {
        'lh.ui.Icon': {
          color: variables.paperColor,
        },
      },
    },

    '.paper': {
      container: {
        borderBottomColor: 'transparent',
        backgroundColor: variables.paperColor,
      },

      'lh.ui.Title': {
        color: variables.darkColor,
      },

      'lh.ui.Button': {
        'lh.ui.Icon': {
          color: variables.darkColor,
        },
      },
    },

    container: {
      height: variables.navigation.height,
      backgroundColor: variables.navigation.backgroundColor,
      borderBottomWidth: variables.navigation.borderBottomWidth,
      borderBottomColor: variables.navigation.borderBottomColor,
    },

    componentsContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },

    leftComponent: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-start',
    },

    centerComponent: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
    },

    rightComponent: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
    },

    'lh.ui.Title': {
      ...variables.navigation.title,
    },

    'lh.ui.Button': {
      flex: 1,
      paddingHorizontal: variables.extraSmallGutter,

      'lh.ui.Icon': {
        color: variables.navigation.icons.color,
        marginHorizontal: variables.smallGutter,
      },
    }
  },
});
