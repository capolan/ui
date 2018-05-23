import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Radio': {
    [INCLUDE]: ['guttersMargin'],

    container: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: variables.radio.inativeBackgroundColor,

      thumbAnimation(driver) {
        return {
          borderColor: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [
              variables.radio.inativeBackgroundColor,
              variables.radio.activeBackgroundColor,
            ],
          }),
          borderWidth: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 8],
          }),
        };
      },
    },
  },
});
