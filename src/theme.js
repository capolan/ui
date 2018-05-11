// import {
//   Dimensions,
//   StyleSheet,
//   Platform,
//   StatusBar,
// } from 'react-native';
import {
  INCLUDE,
  createVariations,
  inverseColorBrightnessForAmount,
  changeColorAlpha,
} from '@shoutem/theme';

// Themes
import checkboxTheme from './themes/checkbox';
import radioTheme from './themes/radio';

export const sizeVariants = ['', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical'];

const primaryColors = {
  red: '#EB3B5A',
  orange: '#FA8231',
  yellow: '#F7B731',
  green: '#20BF6B',
  lightGreen: '#0FB9B1',
  blue: '#3867D6',
  lightBlue: '#2D98DA',
  purple: '#8854D0',

  greys: {
    100: '#F4F6F8',
    200: '#D1D8E0',
    300: '#A5B1C2',
    400: '#778CA3',
    500: '#4B6584',
    600: '#364D68',
    700: '#243447',
    800: '#000',
  },
};

export const defaultVariables = {
  featuredColor: primaryColors.lightBlue,
  backgroundColor: '#f2f2f2',
  paperColor: '#fff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',

  selectionColor: primaryColors.greys['700'],
  placeholderTextColor: changeColorAlpha(primaryColors.greys['700'], 0.5),

  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    color: primaryColors.greys['700'],
  },

  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: primaryColors.greys['700'],
  },

  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: primaryColors.greys['600'],
  },

  button: {
    text: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#fff',
    },

    backgroundColor: primaryColors.lightBlue,
    underlayColor: changeColorAlpha(primaryColors.lightBlue, 0.5),
  },

  switch: {
    activeBackgroundColor: primaryColors.lightBlue,
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  checkbox: {
    activeBackgroundColor: primaryColors.lightBlue,
    inativeBackgroundColor: inverseColorBrightnessForAmount('#fff', 15),
  },

  extraSmallGutter: 4,
  smallGutter: 8,
  mediumGutter: 16,
  largeGutter: 24,
  extraLargeGutter: 32,
};

export default (variables = defaultVariables) => ({
  guttersPadding: {
    ...createVariations('.xs-gutter', sizeVariants, 'padding', variables.extraSmallGutter),
    ...createVariations('.sm-gutter', sizeVariants, 'padding', variables.smallGutter),
    ...createVariations('.md-gutter', sizeVariants, 'padding', variables.mediumGutter),
    ...createVariations('.lg-gutter', sizeVariants, 'padding', variables.largeGutter),
    ...createVariations('.xl-gutter', sizeVariants, 'padding', variables.extraLargeGutter),
  },

  guttersMargin: {
    ...createVariations('.xs-gutter', sizeVariants, 'margin', variables.extraSmallGutter),
    ...createVariations('.sm-gutter', sizeVariants, 'margin', variables.smallGutter),
    ...createVariations('.md-gutter', sizeVariants, 'margin', variables.mediumGutter),
    ...createVariations('.lg-gutter', sizeVariants, 'margin', variables.largeGutter),
    ...createVariations('.xl-gutter', sizeVariants, 'margin', variables.extraLargeGutter),
  },

  commonVariants: {
    '.rounded-corners': {
      borderRadius: 2,
      borderWidth: 0,
      borderColor: 'transparent',
    },

    '.flexible': {
      flex: 1,
    },

    '.inflexible': {
      flex: 0,
    },

    '.collapsible': {
      flex: -1,
    },

    '.stretch': {
      alignSelf: 'stretch',
    },

    '.space-between': {
      justifyContent: 'space-between',
    },

    '.space-around': {
      justifyContent: 'space-around',
    },
  },

  boldTextStyle: {
    fontWeight: '500',
  },

  italicTextStyle: {
    fontStyle: 'italic',
  },

  codeTextStyle: {
    fontFamily: 'Menlo',
  },

  multilineTextStyle: {
    '.v-center': {
      // Compensate for lineHeight, because
      // textAlignVertical is not supported on iOS
      marginTop: -4,
      marginBottom: 4,
    },

    lineHeight: 26,
  },

  text: {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.line-through': {
      textDecorationLine: 'line-through',
    },

    '.h-left': {
      textAlign: 'left',
    },

    '.h-right': {
      textAlign: 'right',
    },

    '.h-center': {
      textAlign: 'center',
    },

    '.bold': {
      [INCLUDE]: ['boldTextStyle'],
    },

    '.multiline': {
      [INCLUDE]: ['multilineTextStyle'],
    },

    '.muted': {
      opacity: 0.5,
    },

    backgroundColor: 'transparent',
  },

  featuredBackground: {
    backgroundColor: variables.featuredColor,
  },

  // Flex Alignments
  verticalFlexAlignment: {
    '.h-center': {
      alignItems: 'center',
    },

    '.h-start': {
      alignItems: 'flex-start',
    },

    '.h-end': {
      alignItems: 'flex-end',
    },

    '.v-center': {
      justifyContent: 'center',
    },

    '.v-start': {
      justifyContent: 'flex-start',
    },

    '.v-end': {
      justifyContent: 'flex-end',
    },
  },

  horizontalFlexAlignment: {
    '.h-center': {
      justifyContent: 'center',
    },

    '.h-start': {
      justifyContent: 'flex-start',
    },

    '.h-end': {
      justifyContent: 'flex-end',
    },

    '.v-center': {
      alignItems: 'center',
    },

    '.v-start': {
      alignItems: 'flex-start',
    },

    '.v-end': {
      alignItems: 'flex-end',
    },
  },

  // View
  'lh.ui.View': {
    [INCLUDE]: ['commonVariants', 'guttersPadding'],

    '.horizontal': {
      [INCLUDE]: ['horizontalFlexAlignment'],
      flexDirection: 'row',
      alignItems: 'flex-end',
    },

    '.vertical': {
      [INCLUDE]: ['verticalFlexAlignment'],
      flexDirection: 'column',
    },

    // '.fill-parent': {
    //   [INCLUDE]: ['fillParent'],
    // },

    // '.overlay': {
    //   backgroundColor: variables.imageOverlayColor,
    // },

    // '.overlay-bottom': {
    //   height: 25,
    //   bottom: 0,
    //   left: 0,
    //   position: 'absolute',
    //   right: 0,
    // },

    '.solid': {
      backgroundColor: variables.paperColor,
    },

    '.wrap': {
      flexWrap: 'wrap',
    },

    '.muted': {
      opacity: 0.3,
    },

    '.featured': {
      [INCLUDE]: ['featuredBackground'],
    },

    '.center': {
      alignSelf: 'center',
    },
  },

  // FormGroup
  'lh.ui.FormGroup': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.blocked': {
      borderWidth: 1,
      borderColor: primaryColors.greys['100'],
      paddingVertical: variables.mediumGutter,
      backgroundColor: variables.paperColor,

      'lh.ui.Label': {
        paddingBottom: variables.smallGutter,
      },

      'lh.ui.TextInput': {
        backgroundColor: 'transparent',
      },
    },

    '.inline': {
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      paddingVertical: 0,

      'lh.ui.Label': {
        flex: 1,
        paddingBottom: 0,
      },

      'lh.ui.TextInput': {
        flex: 1,
        textAlign: 'right',
      },

      'lh.ui.Switch': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },

      'lh.ui.Checkbox': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },

      'lh.ui.Radio': {
        container: {
          marginRight: variables.mediumGutter,
        },
      },
    },

    '.multiline': {
      'lh.ui.TextInput': {
        minHeight: 100,
      },
    },

    'lh.ui.Label': {
      paddingBottom: variables.smallGutter,
      paddingHorizontal: variables.mediumGutter,
    },
  },

  // TextInput
  'lh.ui.TextInput': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    minHeight: 52,
    paddingVertical: variables.smallGutter,
    paddingHorizontal: variables.mediumGutter,
    selectionColor: variables.selectionColor,
    placeholderTextColor: variables.placeholderTextColor,
    backgroundColor: variables.paperColor,
    underlineColorAndroid: 'transparent',
  },

  // Title
  'lh.ui.Title': {
    [INCLUDE]: ['text'],

    ...variables.title,
  },

  // Text
  'lh.ui.Text': {
    [INCLUDE]: ['text'],

    ...variables.text,
  },

  // Label
  'lh.ui.Label': {
    [INCLUDE]: ['text'],

    ...variables.label,
  },

  // Button
  'lh.ui.Button': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.full-width': {
      flex: 1,
      alignSelf: 'stretch',
      height: 52,
    },

    '.muted': {
      'lh.ui.Icon': {
        opacity: 0.5,
      },

      'lh.ui.Text': {
        opacity: 0.5,
      },
    },

    'lh.ui.Text': {
      letterSpacing: 1,
      paddingVertical: variables.mediumGutter,
      ...variables.button.text,
    },

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.button.backgroundColor,
    underlayColor: variables.button.underlayColor,
  },

  // Switch Button
  'lh.ui.Switch': {
    container: {
      borderRadius: 30,
      height: 36,
      paddingHorizontal: 6,
      paddingVertical: 6,
      width: 60,

      muteAnimation(driver) {
        return {
          backgroundColor: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [
              variables.switch.inativeBackgroundColor,
              variables.switch.activeBackgroundColor,
            ],
          }),
        };
      },
    },

    thumb: {
      backgroundColor: variables.paperColor,
      borderRadius: 12,
      height: 24,
      width: 24,

      turnAnimation(driver, { layout, animationOptions }) {
        const { width } = layout;
        return {
          transform: [
            {
              translateX: driver.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (animationOptions.containerWidth - width - 12)],
              }),
            },
          ],
        };
      },
    },
  },

  // Checkbox Button
  ...checkboxTheme(),

  // Radio Button
  ...radioTheme,
});
