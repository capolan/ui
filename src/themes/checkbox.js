import { INCLUDE, inverseColorBrightnessForAmount } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Checkbox': {
    [INCLUDE]: ['guttersMargin'],

    container: {
      height: 24,
      width: 24,
      borderWidth: 1,
      borderColor: inverseColorBrightnessForAmount(variables.paperColor, 15),

      thumbAnimation(driver) {
        return {
          borderColor: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [
              inverseColorBrightnessForAmount(variables.paperColor, 15),
              variables.featuredColor,
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
