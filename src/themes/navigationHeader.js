import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.NavigationHeader': {
    '.featured': {
      container: {
        [INCLUDE]: ['featuredBackground'],
      }
    },

    '.dark': {
      container: {
        backgroundColor: '#000',
      },

      'lh.ui.Title': {
        color: '#fff',
      },

      'lh.ui.Button': {
        'lh.ui.Icon': {
          color: '#fff',
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
      marginBottom: 0,
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
      paddingHorizontal: variables.mediumGutter,

      'lh.ui.Icon': {
        color: variables.navigation.icons.color,
      },
    }
  },
};
