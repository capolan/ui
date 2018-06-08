import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
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

    '.fill-parent': {
      [INCLUDE]: ['fillParent'],
    },

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
      opacity: variables.mutedOpacity,
    },

    '.featured': {
      [INCLUDE]: ['featuredBackground'],
    },

    '.center': {
      alignSelf: 'center',
    },
  },
});
