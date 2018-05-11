import { INCLUDE, createVariations } from '@shoutem/theme';

// Variables
import { sizeVariants, defaultVariables } from './themes/variables';

// Themes
import viewTheme from './themes/view';
import buttonTheme from './themes/button';
import switchTheme from './themes/switch';
import checkboxTheme from './themes/checkbox';
import radioTheme from './themes/radio';

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
  ...viewTheme,

  // FormGroup
  'lh.ui.FormGroup': {
    [INCLUDE]: ['commonVariants', 'guttersMargin'],

    '.blocked': {
      borderWidth: 1,
      borderColor: variables.greys['100'],
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
  ...buttonTheme,

  // Switch Button
  ...switchTheme,

  // Checkbox Button
  ...checkboxTheme,

  // Radio Button
  ...radioTheme,
});
