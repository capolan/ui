import { StyleSheet } from 'react-native';
import { INCLUDE } from '@shoutem/theme';

export default (variables) => {
  const button = {
    'lh.ui.Icon': {
      color: variables.textColor,
      marginHorizontal: variables.smallGutter,
    },

    paddingHorizontal: variables.extraSmallGutter,
  };

  return {
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
        height: 60,
        backgroundColor: variables.backgroundColor,
        borderBottomWidth: variables.hairlineWidth,
        borderBottomColor: variables.lineColor,
      },

      componentsContainer: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
      },

      centerComponent: {
        alignItems: 'center',
        justifyContent: 'center',
      },

      leftComponent: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
      },

      rightComponent: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
      },

      'lh.ui.View': {
        'lh.ui.Button': {
          ...button,
        },

        flex: 1,
        flexDirection: 'row',
      },

      'lh.ui.Button': {
        ...button,

        flex: 1,
      },
    },
  };
};
