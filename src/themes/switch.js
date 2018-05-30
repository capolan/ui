import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Switch': {
    [INCLUDE]: ['guttersMargin'],

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
              inverseColorBrightnessForAmount(variables.paperColor, 15),
              variables.featuredColor,
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
});
