import { INCLUDE, createVariations } from '@shoutem/theme';

// Variables
import { sizeVariants, defaultVariables } from './themes/variables';

// Themes
import viewTheme from './themes/view';
import screenTheme from './themes/screen';
import textTheme from './themes/text';
import formGroupTheme from './themes/formGroup';
import textInputTheme from './themes/textInput';
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

  // Screen
  ...screenTheme,

  // Text, Title, Label
  ...textTheme,

  // FormGroup
  ...formGroupTheme,

  // TextInput
  ...textInputTheme,

  // Button
  ...buttonTheme,

  // Switch Button
  ...switchTheme,

  // Checkbox Button
  ...checkboxTheme,

  // Radio Button
  ...radioTheme,
});
