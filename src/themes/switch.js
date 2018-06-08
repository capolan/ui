import { INCLUDE } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Switch': {
    [INCLUDE]: ['guttersMargin'],

    container: {
      muteAnimation(driver) {
        return {
          backgroundColor: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [
              variables.switchInactiveColor,
              variables.switchActiveColor,
            ],
          }),
        };
      },

      width: 50,
      height: 28,
      borderRadius: 25,
      paddingHorizontal: 5,
      paddingVertical: 5,
    },

    thumb: {
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

      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: variables.switchThumbColor,
    },
  },
});
