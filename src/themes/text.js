import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
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
      fontWeight: 'bold',
    },

    '.multiline': {
      [INCLUDE]: ['multilineTextStyle'],
    },

    '.muted': {
      opacity: 0.5,
    },

    backgroundColor: 'transparent',
  },

  // Heding
  'lh.ui.Heading': {
    [INCLUDE]: ['text'],

    ...variables.typography.heading,
  },

  // Title
  'lh.ui.Title': {
    [INCLUDE]: ['text'],

    ...variables.typography.title,
  },

  // Subtitle
  'lh.ui.Subtitle': {
    [INCLUDE]: ['text'],

    ...variables.typography.subtitle,
  },

  // Caption
  'lh.ui.Caption': {
    [INCLUDE]: ['text'],

    ...variables.typography.caption,
  },

  // Text
  'lh.ui.Text': {
    [INCLUDE]: ['text'],

    ...variables.typography.text,
  },

  // Label
  'lh.ui.Label': {
    [INCLUDE]: ['text'],

    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: variables.textColor,
  },
});
