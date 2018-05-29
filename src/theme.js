import { StyleSheet } from 'react-native';
import { INCLUDE, createVariations } from '@shoutem/theme';

// Themes
import accordionTheme from './themes/accordion';
import badgeTheme from './themes/badge';
import buttonTheme from './themes/button';
import cardTheme from './themes/card';
import checkboxTheme from './themes/checkbox';
import datepickerTheme from './themes/datepicker';
import formGroupTheme from './themes/formGroup';
import iconTheme from './themes/icon';
import modalTheme from './themes/modal';
import navigationHeaderTheme from './themes/navigationHeader';
import radioTheme from './themes/radio';
import screenTheme from './themes/screen';
import switchTheme from './themes/switch';
import textTheme from './themes/text';
import textInputTheme from './themes/textInput';
import timestampTheme from './themes/timestamp';
import viewTheme from './themes/view';

// Variables
import { sizeVariants, defaultVariables } from './variables';

export default (variables = defaultVariables) => ({
  guttersPadding: {
    ...createVariations('.xs-gutter', sizeVariants, 'padding', variables.extraSmallGutter),
    ...createVariations('.sm-gutter', sizeVariants, 'padding', variables.smallGutter),
    ...createVariations('.md-gutter', sizeVariants, 'padding', variables.mediumGutter),
    ...createVariations('.lg-gutter', sizeVariants, 'padding', variables.largeGutter),
    ...createVariations('.xl-gutter', sizeVariants, 'padding', variables.extraLargeGutter),
    ...createVariations('.v-xs-gutter', sizeVariants, 'paddingVertical', variables.extraSmallGutter),
    ...createVariations('.v-sm-gutter', sizeVariants, 'paddingVertical', variables.smallGutter),
    ...createVariations('.v-md-gutter', sizeVariants, 'paddingVertical', variables.mediumGutter),
    ...createVariations('.v-lg-gutter', sizeVariants, 'paddingVertical', variables.largeGutter),
    ...createVariations('.v-xl-gutter', sizeVariants, 'paddingVertical', variables.extraLargeGutter),
    ...createVariations('.h-xs-gutter', sizeVariants, 'paddingHorizontal', variables.extraSmallGutter),
    ...createVariations('.h-sm-gutter', sizeVariants, 'paddingHorizontal', variables.smallGutter),
    ...createVariations('.h-md-gutter', sizeVariants, 'paddingHorizontal', variables.mediumGutter),
    ...createVariations('.h-lg-gutter', sizeVariants, 'paddingHorizontal', variables.largeGutter),
    ...createVariations('.h-xl-gutter', sizeVariants, 'paddingHorizontal', variables.extraLargeGutter),
  },

  guttersMargin: {
    ...createVariations('.xs-gutter', sizeVariants, 'margin', variables.extraSmallGutter),
    ...createVariations('.sm-gutter', sizeVariants, 'margin', variables.smallGutter),
    ...createVariations('.md-gutter', sizeVariants, 'margin', variables.mediumGutter),
    ...createVariations('.lg-gutter', sizeVariants, 'margin', variables.largeGutter),
    ...createVariations('.xl-gutter', sizeVariants, 'margin', variables.extraLargeGutter),
    ...createVariations('.v-xs-gutter', sizeVariants, 'marginVertical', variables.extraSmallGutter),
    ...createVariations('.v-sm-gutter', sizeVariants, 'marginVertical', variables.smallGutter),
    ...createVariations('.v-md-gutter', sizeVariants, 'marginVertical', variables.mediumGutter),
    ...createVariations('.v-lg-gutter', sizeVariants, 'marginVertical', variables.largeGutter),
    ...createVariations('.v-xl-gutter', sizeVariants, 'marginVertical', variables.extraLargeGutter),
    ...createVariations('.h-xs-gutter', sizeVariants, 'marginHorizontal', variables.extraSmallGutter),
    ...createVariations('.h-sm-gutter', sizeVariants, 'marginHorizontal', variables.smallGutter),
    ...createVariations('.h-md-gutter', sizeVariants, 'marginHorizontal', variables.mediumGutter),
    ...createVariations('.h-lg-gutter', sizeVariants, 'marginHorizontal', variables.largeGutter),
    ...createVariations('.h-xl-gutter', sizeVariants, 'marginHorizontal', variables.extraLargeGutter),
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

  selfFlexAlignment: {
    '.start': {
      alignSelf: 'flex-start',
    },

    '.center': {
      alignSelf: 'center',
    },

    '.end': {
      alignSelf: 'flex-end',
    },
  },

  featuredBackground: {
    backgroundColor: variables.featuredColor,
  },

  // Fill parent
  fillParent: {
    ...StyleSheet.absoluteFillObject,
  },
  'fill-parent': {
    '.fill-parent': {
      [INCLUDE]: ['fillParent'],
    },
  },

  // Base Shadow
  baseShadow: {
    shadowColor: variables.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
  },

  // Accordion
  ...accordionTheme(variables),

  // Badge
  ...badgeTheme(variables),

  // Button
  ...buttonTheme(variables),

  // Card
  ...cardTheme(variables),

  // Checkbox Button
  ...checkboxTheme(variables),

  // DatePicker
  ...datepickerTheme(variables),

  // FormGroup
  ...formGroupTheme(variables),

  // Icon Button
  ...iconTheme(variables),

  // Modal
  ...modalTheme(variables),

  // Navigation Header
  ...navigationHeaderTheme(variables),

  // Radio Button
  ...radioTheme(variables),

  // Screen
  ...screenTheme(variables),

  // Switch Button
  ...switchTheme(variables),

  // Heading, Title, Subtitle, Caption, Text, Label
  ...textTheme(variables),

  // TextInput
  ...textInputTheme(variables),

  // Timestamp
  ...timestampTheme(variables),

  // View
  ...viewTheme(variables),
});

export { defaultVariables };
