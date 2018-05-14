import { INCLUDE } from '@shoutem/theme';
import { defaultVariables as variables } from './variables';

export default {
  'lh.ui.Checkbox': {
    [INCLUDE]: ['guttersMargin'],

    container: {
      height: 24,
      width: 24,
      borderWidth: 1,
      borderColor: variables.checkbox.inativeBackgroundColor,

      thumbAnimation(driver) {
        return {
          borderColor: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [
              variables.checkbox.inativeBackgroundColor,
              variables.checkbox.activeBackgroundColor,
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
};
